import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const values = [
  {
    title: "온전함",
    description: "가장 본질에 충실한 선택",
  },
  {
    title: "조용한 존재감",
    description: "과하지 않지만 분명한 가치",
  },
  {
    title: "진심",
    description: "한 사람, 한 자리를 생각하는 마음",
  },
  {
    title: "연결",
    description: "음식으로 이어지는 사람과 사람",
  },
  {
    title: "각인",
    description: "오래 기억되는 특별한 순간",
  },
];

function About() {
  return (
    <>
      <Header />

      <main className="about-brand-page">
        <section className="about-brandmark" aria-label="ARO brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/aro-logo.png`}
            alt="ARO"
          />
          <p>FOOD FOR LASTING MOMENTS</p>
        </section>

        <section
          className="about-mission"
          aria-labelledby="about-mission-title"
        >
          <p className="about-eyebrow">BRAND MISSION</p>
          <h1 id="about-mission-title">
            ‘아로새기다’에서 시작한 이름. 좋은 순간을 마음에 오래 새긴다는
            뜻입니다.
          </h1>
          <p className="about-mission-copy">
            새긴다는 건 흘러내리지 않고 그 자리에 맞춰 고여내는 일이다. 메뉴가
            정한 결, 그 안에서 머물고 있는 결, 그리고 그 결에 맞는 음식의 결을
            식탁에 옮긴다. 그리고 모두의 기억이 그 날을 새길 수 있는 것이 우리의
            미션입니다.
          </p>
        </section>

        <section className="about-meaning" aria-label="ARO brand meaning">
          <div className="about-meaning-label about-meaning-people">
            <span>PEOPLE</span>
            <small>사람</small>
          </div>
          <div className="about-meaning-label about-meaning-ingredient">
            <span>INGREDIENT</span>
            <small>좋은 재료</small>
          </div>
          <div className="about-meaning-label about-meaning-occasion">
            <span>OCCASION</span>
            <small>특별한 순간</small>
          </div>
          <div className="about-meaning-label about-meaning-community">
            <span>COMMUNITY</span>
            <small>따뜻한 관계</small>
          </div>
          <div className="about-meaning-core">
            A MEANINGFUL
            <br />
            DINING EXPERIENCE
          </div>
        </section>

        <section
          className="about-values-section"
          aria-labelledby="about-values-title"
        >
          <h2 id="about-values-title">ARO의 다섯가지 태도</h2>
          <ol className="about-value-list">
            {values.map((value, index) => (
              <li key={value.title}>
                <span className="about-value-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
