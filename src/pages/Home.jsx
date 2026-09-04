import { Link } from "react-router-dom";
import Header from "../components/Header";
import PhotoSlot from "../components/PhotoSlot";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="top-band"></div>

      {/* HERO */}
      <div className="hero-card-wrap">
        <div className="hero-card">
          <div className="hero-card-body">
            <div>
              <div className="hc-eyebrow-row">
                <span>ARO · CATERING &amp; EVENTS</span>
                <span>SEOUL · EST. 2026</span>
              </div>

              <h1 className="hc-headline">
                A table,
                <br />
                <span className="accent-italic">thoughtfully set.</span>
              </h1>

              <div className="hc-meta-row">
                <div>
                  <div className="m-label">— CRAFT</div>
                  <div className="m-text">
                    베뉴와 사람의 선택을 음식으로 옮깁니다.
                  </div>
                </div>

                <div>
                  <div className="m-label">— APPROACH</div>
                  <div className="m-text">
                    Listen. Read. Set.
                    <br />
                    그리고 기억에 새깁니다.
                  </div>
                </div>
              </div>

              <div className="hc-btn-row">
                <Link className="pill-btn" to="/contact">
                  REQUEST A QUOTE →
                </Link>

                <Link className="pill-btn outline" to="/menu">
                  VIEW MENU →
                </Link>
              </div>
            </div>

            <div className="hc-visual">
              <img
                src="/images/main/food1.jpg"
                alt="ARO plating"
                className="hero-main-img"
              />

              <div className="inset">
                <img
                  src="/images/main/food2.jpg"
                  alt="ARO main dish"
                  className="hero-inset-img"
                />

                <div className="inset-cap">DETAILS THAT STAY.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INGREDIENT MARQUEE */}
      <div className="ingredient-marquee">
        <div className="ingredient-track">
          {/* 1번째 세트 */}
          <div className="ingredient-group">
            <img
              src="/images/ingredients/asparagus.png"
              alt="Asparagus"
              className="ingredient ingredient-asparagus"
            />

            <span className="service-text">Weddings</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/herb.png"
              alt="Herb"
              className="ingredient ingredient-herb"
            />

            <span className="service-text">Outdoor Weddings</span>

            <span className="ingredient-dot">✦</span>

            <img
              src="/images/ingredients/corn.png"
              alt="Corn"
              className="ingredient ingredient-corn"
            />

            <span className="service-text">Corporate</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/tomato.png"
              alt="Tomato"
              className="ingredient ingredient-tomato"
            />

            <span className="service-text">Brand Events</span>

            <span className="ingredient-dot">✦</span>

            <img
              src="/images/ingredients/carrot.png"
              alt="Carrot"
              className="ingredient ingredient-carrot"
            />

            <span className="service-text">Private Dining</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/broccoli.png"
              alt="Broccoli"
              className="ingredient ingredient-broccoli"
            />

            <span className="service-text">Film &amp; Press</span>

            <span className="ingredient-dot">✦</span>
          </div>

          {/* 2번째 세트 - 무한 반복용 */}
          <div className="ingredient-group" aria-hidden="true">
            <img
              src="/images/ingredients/asparagus.png"
              alt=""
              className="ingredient ingredient-asparagus"
            />

            <span className="service-text">Weddings</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/herb.png"
              alt=""
              className="ingredient ingredient-herb"
            />

            <span className="service-text">Outdoor Weddings</span>

            <span className="ingredient-dot">✦</span>

            <img
              src="/images/ingredients/corn.png"
              alt=""
              className="ingredient ingredient-corn"
            />

            <span className="service-text">Corporate</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/tomato.png"
              alt=""
              className="ingredient ingredient-tomato"
            />

            <span className="service-text">Brand Events</span>

            <span className="ingredient-dot">✦</span>

            <img
              src="/images/ingredients/carrot.png"
              alt=""
              className="ingredient ingredient-carrot"
            />

            <span className="service-text">Private Dining</span>

            <span className="ingredient-dot">•</span>

            <img
              src="/images/ingredients/broccoli.png"
              alt=""
              className="ingredient ingredient-broccoli"
            />

            <span className="service-text">Film &amp; Press</span>

            <span className="ingredient-dot">✦</span>
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section>
        <div className="wrap phil-split">
          <PhotoSlot caption="주방에서 준비하는 손" ratio="4/5" />

          <div>
            <div className="label">ARO PHILOSOPHY</div>

            <h2 className="section-title" style={{ maxWidth: "16em" }}>
              우리는 식사가 <span className="accent-italic">대화</span>
              라고
              <br />
              믿습니다.
            </h2>

            <p
              style={{
                marginTop: 22,
                fontSize: 15,
                color: "var(--brown-soft)",
                maxWidth: "34em",
              }}
            >
              베뉴가 정한 결과 부부가 고른 결, 그 둘 사이의 대화.
              <br />
              ARO는 그 대화를 듣고 읽어 음식과 세팅, 온도와 여백으로 옮깁니다.
              <br />
              메뉴는 매번 달라져도 이 방식은 변하지 않습니다.
            </p>

            <div style={{ marginTop: 28 }}>
              <Link className="link-quiet" to="/about">
                ABOUT ARO →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="home-menu">
        <div className="wrap">
          <div className="label">SEASONAL MENU</div>

          <div className="menu-heading-row">
            <h2 className="section-title">
              What we're <span className="accent-italic">serving.</span>
            </h2>

            <Link className="link-quiet" to="/menu">
              VIEW FULL MENU →
            </Link>
          </div>

          <div className="grid-3 menu-preview">
            <div className="cell">
              <PhotoSlot caption="Seasonal Starter" ratio="4/5" />

              <div className="menu-preview-text">
                <span>STARTER</span>
                <h3>Seasonal vegetables</h3>
                <p>계절의 재료와 공간에 맞춰 구성합니다.</p>
              </div>
            </div>

            <div className="cell">
              <PhotoSlot caption="Main Course" ratio="4/5" />

              <div className="menu-preview-text">
                <span>MAIN</span>
                <h3>Signature plate</h3>
                <p>베뉴와 행사 성격에 맞춰 완성하는 메인 메뉴.</p>
              </div>
            </div>

            <div className="cell">
              <PhotoSlot caption="Dessert" ratio="4/5" />

              <div className="menu-preview-text">
                <span>DESSERT</span>
                <h3>Something sweet</h3>
                <p>마지막 순간까지 기억에 남는 디저트.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / SELECTED WORKS */}
      <section style={{ background: "var(--ivory-deep)" }}>
        <div className="wrap">
          <div className="label">SELECTED WORKS</div>

          <div className="menu-heading-row">
            <h2 className="section-title">
              우리가 새긴
              <br />
              <span className="accent-italic">기억의 조각들.</span>
            </h2>

            <Link className="link-quiet" to="/portfolio">
              VIEW ALL WORKS →
            </Link>
          </div>

          <div className="grid-2">
            <div className="cell">
              <PhotoSlot caption="Botanical Garden Wedding" ratio="4/3" />

              <div style={{ paddingTop: 18 }}>
                <div className="cap-title">Botanical Garden Wedding</div>
                <div className="cap-desc">SEOUL · WEDDING</div>
              </div>
            </div>

            <div className="cell">
              <PhotoSlot caption="Outdoor Wedding" ratio="4/3" />

              <div style={{ paddingTop: 18 }}>
                <div className="cap-title">Outdoor Wedding</div>
                <div className="cap-desc">JEJU · OUTDOOR</div>
              </div>
            </div>
          </div>

          <div
            className="grid-3"
            style={{
              marginTop: 34,
              background: "transparent",
              gap: 18,
            }}
          >
            <div className="cell">
              <PhotoSlot caption="Corporate Dinner" ratio="4/3" />
              <div style={{ paddingTop: 14 }}>
                <div className="cap-title">Corporate Dinner</div>
              </div>
            </div>

            <div className="cell">
              <PhotoSlot caption="Brand Launching Event" ratio="4/3" />
              <div style={{ paddingTop: 14 }}>
                <div className="cap-title">Brand Event</div>
              </div>
            </div>

            <div className="cell">
              <PhotoSlot caption="Private Dining" ratio="4/3" />
              <div style={{ paddingTop: 14 }}>
                <div className="cap-title">Private Dining</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="wrap">
          <div className="label">OUR PROCESS</div>

          <h2 className="section-title">
            듣고, 읽고,
            <br />
            <span className="accent-italic">식탁에 새깁니다.</span>
          </h2>

          <div className="process-track">
            <div className="process-item">
              <div className="process-num">01</div>
              <div className="process-body">
                <h3>LISTEN · 베뉴 인터뷰</h3>
                <p>
                  공간의 결, 운영 방식, 그리고 베뉴가 중요하게 생각하는 요소를
                  듣습니다.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-num">02</div>
              <div className="process-body">
                <h3>READ · 선택을 읽기</h3>
                <p>
                  부부 또는 클라이언트의 선택, 특이사항과 원하는 분위기를
                  읽습니다.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-num">03</div>
              <div className="process-body">
                <h3>SET · 음식으로 만들기</h3>
                <p>메뉴, 세팅, 온도와 여백까지 하나의 식탁으로 완성합니다.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-num">04</div>
              <div className="process-body">
                <h3>IMPRINT · 새김</h3>
                <p>그날의 식탁이 모두의 기억에 오래 남도록 마무리합니다.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 30 }}>
            <Link className="link-quiet" to="/process">
              PROCESS 자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        style={{
          background: "var(--sage)",
          color: "var(--ivory)",
        }}
      >
        <div
          className="wrap"
          style={{
            textAlign: "center",
            maxWidth: 860,
          }}
        >
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(32px, 5vw, 54px)",
              lineHeight: 1.35,
              fontWeight: 400,
            }}
          >
            “오늘 음식 정말 좋았다.”
          </div>

          <p
            style={{
              marginTop: 22,
              fontSize: 14,
              opacity: 0.85,
            }}
          >
            우리가 만들고 싶은 가장 좋은 기억.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="wrap">
          <div className="label">THE KITCHEN, BRIEFLY</div>

          <h2 className="section-title">
            결을 만드는 사람들,
            <br />
            짧게 <span className="accent-italic">소개합니다.</span>
          </h2>

          <div className="people-grid">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <PhotoSlot caption="팀원 사진" ratio="1/1" />
                <div className="person-name">이름 자리</div>
                <div className="person-role">직무 자리</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--ivory-deep)" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
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
                베뉴 인터뷰 이후 일정에 맞춰 시식 자리를 마련합니다.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                야외 행사도 가능한가요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                행사 장소와 환경을 확인한 뒤 진행 가능 여부를 안내드립니다.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                어떤 절차로 진행되나요?
                <span className="plus">+</span>
              </summary>

              <div className="faq-a">
                베뉴 인터뷰 → 선택 확인 → 음식으로 만들기 → 새김, 4단계로
                진행합니다.{" "}
                <Link className="link-quiet" to="/process">
                  자세히 보기
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        style={{
          paddingTop: 0,
          background: "var(--ivory-deep)",
        }}
      >
        <div className="quote-dark-section">
          <div className="quote-dark-grid">
            <div className="qd-copy">
              <div className="label">REQUEST A QUOTE</div>

              <h2>
                시작하고 싶은 식탁을,
                <br />
                <span className="accent-italic">들려주세요.</span>
              </h2>

              <p>
                공간, 일정, 인원만 알려주셔도 좋습니다. 나머지는 함께 듣고
                읽으며 하나씩 채워갑니다.
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

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
            <option>프라이빗 행사</option>
            <option>베뉴 파트너십</option>
          </select>
        </div>

        <div>
          <label>예정 인원</label>
          <input type="text" placeholder="예: 120명" />
        </div>
      </div>

      <div>
        <label>전하고 싶은 이야기</label>
        <textarea
          placeholder="공간, 일정, 분위기 등 자유롭게 적어주세요."
          style={{
            minHeight: 70,
            resize: "vertical",
          }}
        />
      </div>

      <button className="qd-submit" type="submit">
        SEND REQUEST →
      </button>
    </form>
  );
}

export default Home;
