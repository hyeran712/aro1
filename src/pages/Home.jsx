import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import OccasionIcon from "../components/OccasionIcon";
import "./HomeHero.css";

function Home() {
  return (
    <>
      {/* =====================================
          HEADER
      ===================================== */}
      <Header homeHero />

      {/* =====================================
          HERO
      ===================================== */}
      <section className="occasion-hero" aria-labelledby="occasion-title">
        <div className="occasion-visual">
          <img src={`${process.env.PUBLIC_URL}/images/main/hero1.png`} alt="꽃과 핑거푸드로 꾸민 ARO 케이터링 테이블" fetchPriority="high" />
        </div>
        <div className="occasion-copy">
          <p className="occasion-eyebrow">FOR EVERY OCCASION</p>
          <h1 id="occasion-title">모든 특별한 자리를 위한<br />케이터링, ARO</h1>
          <p className="occasion-description">작은 모임부터 대규모 행사까지,<br />상황에 맞는 최상의 메뉴와 서비스로 함께합니다.</p>
          <ul className="occasion-services" aria-label="케이터링 서비스">
            {[
              ['wedding', '웨딩'],
              ['outdoor', '야외행사'],
              ['corporate', '기업행사'],
              ['brand', '브랜드행사'],
              ['private', '프라이빗파티'],
            ].map(([type, label]) => (
              <li key={type}><OccasionIcon type={type} /><span>{label}</span></li>
            ))}
          </ul>
          <div className="occasion-actions">
            <Link to="/contact">REQUEST A QUOTE <span aria-hidden="true">→</span></Link>
            <Link to="/menu">VIEW MENU <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* =====================================
          INGREDIENT MARQUEE
      ===================================== */}
      <section className="service-bands" aria-label="Our event services">
        <div className="service-band">
          <div className="service-band-track">
            <div className="service-band-group">
              <div className="service-band-item">
                <span>Weddings</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-leaf-left.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Outdoor Weddings</span>
                <span className="service-band-dot" aria-hidden="true">
                  &#10020;
                </span>
              </div>
              <div className="service-band-item">
                <span>Corporate</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-flowers.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Brand Events</span>
                <span className="service-band-dot" aria-hidden="true">
                  &#10020;
                </span>
              </div>
              <div className="service-band-item">
                <span>Private Dining</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-leaf-right.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Film &amp; Press</span>
              </div>
            </div>
            <div className="service-band-group" aria-hidden="true">
              <div className="service-band-item">
                <span>Weddings</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-leaf-left.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Outdoor Weddings</span>
                <span className="service-band-dot" aria-hidden="true">
                  &#10020;
                </span>
              </div>
              <div className="service-band-item">
                <span>Corporate</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-flowers.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Brand Events</span>
                <span className="service-band-dot" aria-hidden="true">
                  &#10020;
                </span>
              </div>
              <div className="service-band-item">
                <span>Private Dining</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/service-leaf-right.svg`}
                  alt=""
                />
              </div>
              <div className="service-band-item">
                <span>Film &amp; Press</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          PHILOSOPHY
      ===================================== */}
      <section className="philosophy-editorial">
        <div className="wrap philosophy-editorial-grid">
          {/* TEXT */}
          <div className="philosophy-copy">
            <div className="label">OUR PHILOSOPHY</div>

            <h2>
              우리는 식사가
              <br />
              하나의 대화라고
              <br />
              생각합니다.
            </h2>

            <p>
              좋은 식사는 사람과 사람을 이어주고, 특별한 순간을 오래 기억하게
              합니다. ARO는 음식, 공간, 사람 사이의 대화를 하나의 식탁으로
              만듭니다.
            </p>

            <Link className="editorial-link" to="/about">
              MORE ABOUT ARO →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="philosophy-image-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/main/table.png`}
              alt="ARO wedding table"
              className="philosophy-image"
            />

            <span className="philosophy-image-caption">
              DETAILS
              <br />
              MAKE
              <br />
              SPECIAL DAYS
            </span>
          </div>
        </div>
      </section>

      {/* =====================================
          SERVICES / MENU
      ===================================== */}
      <section className="services-editorial">
        <div className="wrap">
          {/* TITLE */}
          <div className="services-heading">
            <div>
              <div className="label">OUR SERVICES</div>

              <h2>What we’re serving.</h2>
            </div>

            <Link className="editorial-link" to="/menu">
              VIEW FULL MENU →
            </Link>
          </div>

          {/* SERVICE GRID */}
          <div className="service-editorial-grid">
            {/* SERVICE 01 */}
            <Link to="/menu" className="service-editorial-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/main/service1.png`}
                alt="Seasonal Ingredients"
              />

              <h3>Seasonal Ingredients</h3>

              <p>계절의 재료로 완성하는 특별한 메뉴</p>
            </Link>

            {/* SERVICE 02 */}
            <Link to="/service" className="service-editorial-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/main/table.png`}
                alt="Signature Plan"
              />

              <h3>Signature Plan</h3>

              <p>상황에 맞춘 맞춤형 케이터링 서비스</p>
            </Link>

            {/* SERVICE 03 */}
            <Link to="/service" className="service-editorial-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/main/foodservice.png`}
                alt="Something More"
              />

              <h3>Something More</h3>

              <p>음식 그 이상, 기억에 남는 경험</p>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          FAQ
      ===================================== */}
      <section className="home-faq">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="label">BEFORE YOU ASK</div>

          <h2 className="section-title">
            묻기 전에,
            <br />
            <span className="accent-italic">먼저</span> 답해둡니다.
          </h2>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                최소 인원 기준이 있나요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                베뉴와 행사 규모에 따라 달라집니다. 상담 시 자세히
                안내해드립니다.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                시식이 가능한가요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                상담 이후 일정에 맞춰 시식 자리를 마련합니다.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                야외 행사도 가능한가요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                웨딩뿐 아니라 야외 행사, 기업 행사와 브랜드 이벤트까지
                순차적으로 진행하고 있습니다.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                어떤 절차로 진행되나요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                상담 → 공간 및 행사 파악 → 메뉴 구성 → 최종 진행 순서로
                준비합니다.{" "}
                <Link className="link-quiet" to="/process">
                  자세히 보기
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =====================================
          QUOTE
      ===================================== */}
      <section
        style={{
          paddingTop: 0,
          background: "var(--ivory-deep)",
        }}
      >
        <div className="quote-dark-section">
          <div className="quote-dark-grid">
            {/* COPY */}
            <div className="qd-copy">
              <div className="label">REQUEST A QUOTE</div>

              <h2>
                문의를 남겨주세요,
                <br />
                <span className="accent-italic">곧</span> 답장드릴게요.
              </h2>

              <p>
                <p>
                  공간, 일정, 인원만 알려주시면 ARO가 어울리는 방향을 함께
                  제안드립니다.
                </p>
              </p>
            </div>

            {/* FORM */}
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* =====================================
          FOOTER
      ===================================== */}
      <Footer />
    </>
  );
}

/* =====================================
   QUOTE FORM
===================================== */

function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("시안용 폼입니다. 실제 문의 처리는 연동이 필요합니다.");
  };

  return (
    <form className="qd-form" onSubmit={handleSubmit}>
      <div className="qd-row">
        <div>
          <label>이름</label>

          <input type="text" placeholder="성함 또는 소속" />
        </div>

        <div>
          <label>연락처</label>

          <input type="text" placeholder="이메일 또는 전화번호" />
        </div>
      </div>

      <div className="qd-row">
        <div>
          <label>문의 유형</label>

          <select>
            <option>웨딩 케이터링</option>

            <option>야외 웨딩</option>

            <option>기업 행사</option>

            <option>브랜드 행사</option>

            <option>프라이빗 다이닝</option>
          </select>
        </div>

        <div>
          <label>예정 인원</label>

          <input type="text" placeholder="예: 120명" />
        </div>
      </div>

      <div>
        <label>문의 내용</label>

        <textarea
          placeholder="공간, 일정, 분위기 등 자유롭게 적어주세요."
          style={{
            minHeight: "70px",
            resize: "vertical",
          }}
        />
      </div>

      <button className="qd-submit" type="submit">
        문의 보내기 →
      </button>
    </form>
  );
}

export default Home;
