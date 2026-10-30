import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAP_URL = `https://map.naver.com/p/search/${encodeURIComponent('서울시 중구 충무로 24')}`;

function Contact() {
  const [form, setForm] = useState({ type: '베뉴 파트너십', name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    setSubmitted(false);
    const endpoint = process.env.REACT_APP_INQUIRY_API_URL;
    if (!endpoint) {
      setError('현재 온라인 문의를 준비 중입니다. 잠시 후 다시 이용해주세요.');
      return;
    }
    setSending(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('send failed');
      setSubmitted(true);
    } catch {
      setError('전송을 확인하지 못했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <section className="page-hero contact-page-hero">
        <div className="wrap">
          <div className="eyebrow">CONTACT</div>
          <h1>궁금한 점이 있으시면<br />언제든 문의해주세요.</h1>
          <p>베뉴 파트너십, 웨딩 케이터링, 행사 케이터링 문의 모두 환영합니다.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div>
            <div className="contact-item"><div className="k">PHONE</div><div className="v">02-1234-5678</div></div>
            <div className="contact-item"><div className="k">EMAIL</div><div className="v">hello@aro-catering.kr</div></div>
            <div className="contact-item"><div className="k">ADDRESS</div><div className="v"><a href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="서울시 중구 충무로 24 B101, 네이버 지도 새 탭에서 열기">서울시 중구 충무로 24 B101</a></div></div>
            <div className="contact-item"><div className="k">INSTAGRAM</div><div className="v">@atelieraro</div></div>
            <a className="contact-map-link" href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 위치 보기, 새 탭에서 열기">
              <span>네이버 지도에서 위치 보기</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <form className="inquiry" onSubmit={handleSubmit} aria-busy={sending}>
            <fieldset disabled={sending} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
            <div className="field">
              <label htmlFor="f-type">문의 유형</label>
              <select id="f-type" name="type" value={form.type} onChange={handleChange}>
                <option>베뉴 파트너십</option>
                <option>웨딩 케이터링</option>
                <option>야외/대외 행사 케이터링</option>
                <option>기타</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-name">이름 / 소속</label>
              <input id="f-name" name="name" type="text" required maxLength={80} placeholder="예: 000웨딩홀 운영팀" value={form.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="f-contact">연락처</label>
              <input id="f-contact" name="contact" type="text" required maxLength={120} placeholder="이메일 또는 전화번호" value={form.contact} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="f-msg">전하고 싶은 결</label>
              <textarea id="f-msg" name="message" required maxLength={600} placeholder="공간, 인원, 예정일 등 자유롭게 적어주세요." value={form.message} onChange={handleChange} />
            </div>
            <button className="submit-btn" type="submit" disabled={sending || submitted}>{sending ? '전송 중…' : submitted ? '전송 완료' : '문의 보내기'}</button>
            </fieldset>
            {submitted && <div className="form-success" role="status">문의가 접수되었습니다.</div>}
            {error && <div role="alert" style={{ marginTop: 16, color: '#a03224' }}>{error}</div>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
