import http from 'node:http';
import { randomBytes } from 'node:crypto';

const redirect = 'http://localhost:8788/callback';
let pending;
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const page = body => `<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="referrer" content="no-referrer"><title>ARO 카카오 연결</title><body style="font-family:sans-serif;max-width:650px;margin:60px auto;line-height:1.8">${body}</body></html>`;
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, redirect);
  const send = (status, body) => { res.writeHead(status, {'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action https://kauth.kakao.com 'self'; frame-ancestors 'none'",'Referrer-Policy':'no-referrer','X-Content-Type-Options':'nosniff'}); res.end(page(body)); };
  if (req.headers.host !== 'localhost:8788') return send(403, '허용되지 않은 주소입니다.');
  if (req.method === 'GET' && url.pathname === '/') {
    const nonce = randomBytes(24).toString('hex');
    pending = { nonce };
    return send(200, `<h1>ARO 카카오 계정 연결</h1><p>알림을 받을 계정으로 로그인해주세요. 입력한 키는 이 컴퓨터의 메모리에서만 사용합니다.</p><form method="post" action="/connect"><input type="hidden" name="nonce" value="${nonce}"><p><label>REST API 키<br><input name="client_id" type="password" required autocomplete="off" style="width:100%"></label></p><p><label>클라이언트 시크릿 코드<br><input name="client_secret" type="password" required autocomplete="off" style="width:100%"></label></p><button>카카오 계정 연결하기</button></form>`);
  }
  if (req.method === 'POST' && url.pathname === '/connect') {
    // Some embedded browsers omit Origin. The one-time form nonce below
    // still prevents another site from submitting valid credentials.
    if (req.headers.origin && !['http://localhost:8788', 'null'].includes(req.headers.origin)) return send(403, '다시 시작해주세요.');
    let raw = '';
    for await (const chunk of req) { raw += chunk; if (raw.length > 4096) return send(413, '입력이 너무 깁니다.'); }
    const data = new URLSearchParams(raw);
    if (!pending || data.get('nonce') !== pending.nonce) return send(403, '연결 화면을 새로 열어주세요.');
    pending = { client_id: data.get('client_id')?.trim(), client_secret: data.get('client_secret')?.trim(), state: randomBytes(24).toString('hex'), created: Date.now() };
    if (!pending.client_id || !pending.client_secret) return send(400, '두 값을 모두 입력해주세요.');
    const query = new URLSearchParams({client_id:pending.client_id, redirect_uri:redirect, response_type:'code', scope:'talk_message', state:pending.state});
    res.writeHead(303, {Location:`https://kauth.kakao.com/oauth/authorize?${query}`, 'Cache-Control':'no-store'});
    return res.end();
  }
  if (req.method === 'GET' && url.pathname === '/callback') {
    if (!pending?.state || pending.state !== url.searchParams.get('state') || Date.now()-pending.created > 600000) return send(400, '<p>연결이 시작되지 않았거나 만료됐어요.</p><a href="/">처음부터 연결하기</a>');
    const credentials = pending;
    pending = undefined;
    if (!url.searchParams.get('code')) return send(400, '<p>로그인 동의가 완료되지 않았습니다.</p><a href="/">다시 연결하기</a>');
    try {
      const response = await fetch('https://kauth.kakao.com/oauth/token', {method:'POST',body:new URLSearchParams({grant_type:'authorization_code',client_id:credentials.client_id,client_secret:credentials.client_secret,redirect_uri:redirect,code:url.searchParams.get('code')}),signal:AbortSignal.timeout(15000)});
      const tokens = await response.json();
      if (!response.ok || !tokens.refresh_token) return send(400, `<h1>연결을 완료하지 못했어요</h1><p>키와 시크릿이 같은 앱의 값인지, 등록한 리다이렉트 주소가 정확한지 확인해주세요.</p><p>오류 코드: ${escape(tokens.error || 'token_missing')}</p><a href="/">다시 연결하기</a>`);
      const value = JSON.stringify({refresh_token:tokens.refresh_token});
      return send(200, `<h1>카카오 계정 연결 완료</h1><p>아래 값 전체를 복사해서 Cloudflare → Workers KV → aro-kakao-tokens에 저장해주세요.</p><p>키 이름: <b>recipient</b></p><p>값:</p><textarea readonly rows="5" style="width:100%">${escape(value)}</textarea><p>이 값은 채팅에 보내지 마세요. 저장 후 이 창을 닫으면 됩니다.</p>`);
    } catch { return send(502, '<p>카카오 서버에 연결하지 못했어요.</p><a href="/">다시 연결하기</a>'); }
  }
  send(404, '페이지를 찾을 수 없습니다.');
});
server.listen(8788, '127.0.0.1', () => console.log('ARO connection page: http://localhost:8788/'));
