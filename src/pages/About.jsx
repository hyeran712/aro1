import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">ABOUT</div>
          <h1>새긴다는 건 들여다보고,<br />거기에 맞춰 그어내는 일입니다.</h1>
          <p>순우리말 '아로새기다'에서 온 이름. 또렷하게 마음에 새겨 두다, 라는 뜻입니다.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-intro-split">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(56px,8vw,100px)', letterSpacing: '.06em', lineHeight: 1 }}>ARO</div>
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'var(--brown-soft)', marginBottom: 20, maxWidth: '36em' }}>
              베뉴가 정한 결, 그 안에서 부부가 고른 결, 그리고 그 둘에 맞는 음식의 결을 식탁에 옮깁니다.
              그리고 모두의 기억에 그날을 새길 수 있는 것 — 그것이 ARO의 미션입니다.
            </p>
            <p style={{ fontSize: 16, color: 'var(--brown-soft)', maxWidth: '36em' }}>
              베뉴에게는 추천할 만한 식음 파트너, 부부에게는 자기들 선택이 반영됐다는 만족, 하객에게는
              만족스러운 기억. 셋의 마음이 한 식탁에서 만족되는 경우는 의외로 드뭅니다. ARO는 그 만족을 위해서 일합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="attitude" style={{ background: 'var(--ivory-deep)' }}>
        <div className="wrap">
          <div className="label">다섯 가지 태도</div>
          <h2 className="section-title">음식보다 먼저 지키는 것들.</h2>
          <div className="attitudes">
            {[
              ['온전함', 'WHOLENESS', '음식의 완성도가 자리 전체의 분위기로 이어집니다.'],
              ['조용한 존재감', 'QUIET', '베뉴와 부부가 주인공입니다. ARO는 조연입니다.'],
              ['진심', 'SINCERITY', '우리가 정한 음식이 아니라, 두 선택을 음식으로 옮겼다는 정성.'],
              ['연결', 'CONNECTION', '베뉴 · 부부 · 하객을 한 식탁에서 만나게 합니다.'],
              ['각인', 'IMPRINT', '그날이 모두의 기억에, 베뉴의 자산에 남습니다.'],
            ].map(([kr, en, desc]) => (
              <div className="attitude-row" key={en}>
                <div>
                  <span className="attitude-kr">{kr}</span>
                  <span className="attitude-en">{en}</span>
                </div>
                <div className="attitude-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="label">디자인 언어</div>
          <h2 className="section-title">모든 접점을 다섯 가지 기준으로 봅니다.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 30px', marginTop: 28 }}>
            {['형태', '질감', '여백', '무게감', '온도'].map((c) => (
              <span key={c} style={{ fontSize: 14, color: 'var(--brown-soft)', borderBottom: '1px dashed var(--gray)', paddingBottom: 3 }}>{c}</span>
            ))}
          </div>
          <div className="swatches">
            <div className="swatch sw1"><span>Warm Ivory</span></div>
            <div className="swatch sw2"><span>Sage Green</span></div>
            <div className="swatch sw3"><span>Terracotta</span></div>
            <div className="swatch sw4"><span>Warm Gray</span></div>
            <div className="swatch sw5"><span>Deep Brown</span></div>
          </div>
          <div className="about-design-cols">
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 16, marginBottom: 14 }}>ARO다운 것</h4>
              <ul>
                {['아이보리 무광 도자기', '핸드메이드 질감', '무광 실버 커틀러리', '오트밀 린넨'].map((t) => (
                  <li key={t} style={{ padding: '8px 0', borderBottom: '1px solid var(--line)', fontSize: 14.5, color: 'var(--brown-soft)' }}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 16, marginBottom: 14 }}>ARO답지 않은 것</h4>
              <ul>
                {['순백 유광 도자기', '금장 장식', '플라스틱', '형광 컬러'].map((t) => (
                  <li key={t} style={{ padding: '8px 0', borderBottom: '1px solid var(--line)', fontSize: 14.5, color: '#A69A8E', textDecoration: 'line-through' }}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory-deep)' }}>
        <div className="wrap">
          <div className="label">팀 소개</div>
          <h2 className="section-title">안주림 그룹, 일상이 특별해지는<br />맛과 브랜드를 만듭니다.</h2>
          <p style={{ marginTop: 20, fontSize: 15, color: 'var(--brown-soft)', maxWidth: '36em' }}>
            ARO는 안주림 그룹의 웨딩 · 행사 케이터링 브랜드입니다. 팀 소개 콘텐츠는 준비 중입니다.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
