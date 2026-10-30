// Credentials live only in Worker secrets and KV, never in the React build.
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const headers = { 'Content-Type': 'application/json', 'Vary': 'Origin' };
    if (origin !== env.ALLOWED_ORIGIN) return new Response(null, { status: 403 });
    headers['Access-Control-Allow-Origin'] = origin;
    const reply = (status, data) => Response.json(data, { status, headers });
    if (new URL(request.url).pathname !== '/inquiry') return reply(404, { ok: false });
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: {
      ...headers, 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type',
    } });
    if (request.method !== 'POST') return reply(405, { ok: false });
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply(415, { ok: false });
    try {
      const raw = await request.text();
      if (raw.length > 5000) return reply(413, { ok: false });
      let form;
      try { form = JSON.parse(raw); } catch { return reply(400, { ok: false }); }
      const limits = { type: 40, name: 80, contact: 120, message: 600 };
      for (const [key, limit] of Object.entries(limits)) {
        if (typeof form?.[key] !== 'string' || !form[key].trim() || form[key].length > limit) return reply(400, { ok: false });
        form[key] = form[key].trim();
      }
      if (!['베뉴 파트너십', '웨딩 케이터링', '야외/대외 행사 케이터링', '기타'].includes(form.type)) return reply(400, { ok: false });
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const rate = await env.INQUIRY_LIMITER.limit({ key: ip });
      if (!rate.success) return reply(429, { ok: false });
      const tokens = await env.KAKAO_TOKENS.get('recipient', 'json');
      if (!tokens?.refresh_token) return reply(503, { ok: false });
      let access = tokens.access_token;
      if (!access || tokens.expires_at < Date.now() + 60000) {
        const body = new URLSearchParams({ grant_type: 'refresh_token', client_id: env.KAKAO_CLIENT_ID, refresh_token: tokens.refresh_token });
        if (env.KAKAO_CLIENT_SECRET) body.set('client_secret', env.KAKAO_CLIENT_SECRET);
        const response = await fetch('https://kauth.kakao.com/oauth/token', { method: 'POST', body, signal: AbortSignal.timeout(8000) });
        const fresh = await response.json();
        if (!response.ok || !fresh.access_token) throw new Error('token');
        access = fresh.access_token;
        await env.KAKAO_TOKENS.put('recipient', JSON.stringify({
          access_token: access, refresh_token: fresh.refresh_token || tokens.refresh_token,
          expires_at: Date.now() + fresh.expires_in * 1000,
        }));
      }
      const text = `[ARO 새 문의]\n유형: ${form.type}\n이름/소속: ${form.name}\n연락처: ${form.contact}\n\n${form.message}`;
      const response = await fetch('https://kapi.kakao.com/v2/api/talk/memo/default/send', {
        method: 'POST', headers: { Authorization: `Bearer ${access}` },
        body: new URLSearchParams({ template_object: JSON.stringify({ object_type: 'text', text,
          link: { web_url: env.SITE_URL, mobile_web_url: env.SITE_URL }, button_title: '사이트 보기',
        }) }), signal: AbortSignal.timeout(8000),
      });
      const result = await response.json();
      if (!response.ok || result.result_code !== 0) throw new Error('delivery');
      return reply(200, { ok: true });
    } catch {
      // Do not log inquiry contents or tokens.
      return reply(502, { ok: false });
    }
  },
};
