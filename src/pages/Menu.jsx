import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoSlot from '../components/PhotoSlot';

const CATS = ['COCKTAIL', 'BUFFET', 'PLATED', 'DESSERT', 'DRINK'];

function Menu() {
  const [active, setActive] = useState('COCKTAIL');

  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">MENU</div>
          <h1>신선한 식재료로<br />정성껏 준비한 메뉴입니다.</h1>
          <p>베뉴와 부부의 결에 맞춰 매번 새롭게 구성됩니다. 아래는 참고용 샘플 메뉴입니다.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tabs">
            {CATS.map((c) => (
              <button
                key={c}
                className={`tab-btn${active === c ? ' active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {[1, 2, 3].map((n) => (
              <div className="cell" key={n}>
                <PhotoSlot caption={`${active} 메뉴 사진`} ratio="1/1" />
                <div style={{ padding: '14px 4px' }}>
                  <div style={{ fontSize: 14, color: 'var(--brown)' }}>{active} 메뉴 예시 {n}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <button className="btn-primary" type="button" onClick={() => alert('시안용 버튼입니다. 실제 파일 연동이 필요합니다.')}>
              메뉴 자료 다운로드
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
