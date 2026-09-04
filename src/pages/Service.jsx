import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoSlot from '../components/PhotoSlot';

const SERVICES = [
  { en: 'WEDDING', kr: '웨딩 케이터링', desc: '베뉴와 두 사람의 결을 담은 식탁. 현재 ARO가 가장 깊이 있게 운영하는 서비스입니다.', tags: ['운영 중', '베뉴 파트너십', '맞춤 메뉴'], caption: '웨딩 홀 테이블 세팅' },
  { en: 'OUTDOOR WEDDING', kr: '야외 웨딩', desc: '자연과 계절을 읽어 완성하는 식탁. 확장을 준비하고 있는 서비스입니다.', tags: ['확장 예정', '가든 · 하우스 웨딩'], caption: '야외 웨딩 가든 세팅' },
  { en: 'CORPORATE', kr: '기업 행사', desc: '세미나, 컨퍼런스, 기업 행사까지 케이터링 서비스를 제공합니다.', tags: ['확장 예정', '기업 다이닝'], caption: '기업 컨퍼런스 다이닝' },
  { en: 'BRAND EVENT', kr: '브랜드 행사', desc: '브랜드가 기억을 남기는 자리, 차별화된 이벤트를 기획합니다.', tags: ['확장 예정', '런칭 이벤트'], caption: '브랜드 런칭 행사 테이블' },
  { en: 'PRIVATE EVENT', kr: '프라이빗 행사', desc: '생일, 가족 모임 등 프라이빗한 순간을 위한 식탁을 준비합니다.', tags: ['확장 예정', '소규모 모임'], caption: '프라이빗 다이닝 테이블' },
];

function Service() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">SERVICE</div>
          <h1>다양한 케이터링 서비스를<br />안내해드립니다.</h1>
          <p>웨딩에서 시작해, 야외 · 대외 행사로 넓혀가고 있습니다. '듣고 · 읽고 · 새기는' 방식은 어떤 자리에서도 같습니다.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          {SERVICES.map((s) => (
            <div className="grid-2" style={{ marginBottom: 2 }} key={s.en}>
              <div className="cell"><PhotoSlot caption={s.caption} ratio="3/2" /></div>
              <div className="cell" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 40 }}>
                <div style={{ fontSize: 12.5, color: 'var(--sage)', marginBottom: 10 }}>{s.en}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--brown)', marginBottom: 14 }}>{s.kr}</div>
                <p style={{ fontSize: 14.5, color: 'var(--brown-soft)', marginBottom: 18, maxWidth: '30em' }}>{s.desc}</p>
                <div>
                  {s.tags.map((t) => (
                    <span key={t} style={{ fontSize: 12, color: 'var(--brown-soft)', border: '1px solid var(--line)', padding: '5px 12px', borderRadius: 20, marginRight: 8, display: 'inline-block', marginBottom: 6 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
