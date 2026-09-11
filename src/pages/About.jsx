import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandText from "../components/BrandText";
import "./About.css";

const values = [
  {
    title: "온전함",
    description: "가장 본질에 충실한 선택",
    image: "about/integrity.png",
  },
  {
    title: "조용한 존재감",
    description: "과하지 않지만 분명한 가치",
    image: "about/calm-presence.png",
  },
  {
    title: "진심",
    description: "한 사람, 한 자리를 생각하는 마음",
    image: "about/sincerity.png",
  },
  {
    title: "연결",
    description: "음식으로 이어지는 사람과 사람",
    image: "about/connection.png",
  },
  {
    title: "각인",
    description: "오래 기억되는 특별한 순간",
    image: "about/imprint.png",
  },
];

function About() {
  return (
    <>
      <Header />

      <main className="about-belief-page">
        {/* OUR BELIEF */}
        <section
          className="about-belief-intro"
          aria-labelledby="about-belief-title"
        >
          <p className="about-belief-eyebrow">OUR BELIEF</p>

          <h1 id="about-belief-title">
            우리는 식사가 하나의 대화라고 생각합니다.
          </h1>

          <div className="about-belief-rule" aria-hidden="true" />

          <p className="about-belief-description">
            <span>좋은 식사는 사람과 사람을 이어줍니다.</span>

            <span>
              <BrandText />는 음식이 만들어내는 대화의 순간을 믿으며,
            </span>

            <span>
              일상의 자리부터 특별한 날까지, 다정하고 깊이 있는 경험을
              제안합니다.
            </span>
          </p>
        </section>

        <div className="about-belief-content">
          {/* TABLE IMAGE */}
          <figure className="about-belief-photo">
            <img
              src={`${process.env.PUBLIC_URL}/images/about/belief-table.png`}
              alt="ARO table setting"
              fetchPriority="high"
            />

            <figcaption>
              FOOD
              <br />
              PEOPLE
              <br />
              OCCASIONS
              <br />A MORE LASTING TOMORROW
            </figcaption>
          </figure>

          {/* THE ARO WAY */}
          <section
            id="attitude"
            className="about-values-section"
            aria-labelledby="about-values-title"
          >
            <p className="about-belief-eyebrow">THE ARO WAY</p>

            <h2 id="about-values-title">우리가 전하고자 하는 다섯 가지.</h2>

            <ol className="about-value-list">
              {values.map((value, index) => (
                <li key={value.title}>
                  <span className="about-value-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="about-value-icon">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${value.image}`}
                      alt={value.title}
                      loading="lazy"
                    />
                  </div>

                  <h3>{value.title}</h3>

                  <div className="about-value-divider" />

                  <p>{value.description}</p>
                </li>
              ))}
            </ol>

            <p className="about-values-motto">
              BETTER FOOD MAKES A MORE THOUGHTFUL TOMORROW.
            </p>
          </section>
        </div>

        {/* CLOSING */}
        <section className="about-belief-closing">
          <h2>일상에 오래 남는 경험을 만듭니다.</h2>

          <Link to="/service">
            ARO CATERING
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
