import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoSlot from "../components/PhotoSlot";

const POSTS = [
  {
    cat: "스토리",
    title: "ARO가 새긴 첫 번째 결",
    desc: "브랜드가 시작된 이야기와 이름에 담긴 의미를 소개합니다.",
    image: "aro-first-story.png",
  },
  {
    cat: "팀 & 아이디어",
    title: "다섯 가지 태도는 어떻게 만들어졌나",
    desc: "온전함 · 조용한 존재감 · 진심 · 연결 · 각인, 그 기준이 세워진 과정.",
    image: "aro-five-attitudes.png",
  },
  {
    cat: "뉴스",
    title: "ARO, 야외 · 대외 행사로 서비스를 넓힙니다",
    desc: "웨딩을 넘어 다양한 자리로 확장하는 다음 단계를 안내합니다.",
    image: "aro-service-expansion.png",
  },
];

function Journal() {
  return (
    <>
      <Header />

      <section className="journal-page-hero">
        <div className="wrap">
          <div className="label">JOURNAL</div>

          <h1>
            ARO의 이야기,
            <br />
            팀의 생각을 기록합니다.
          </h1>

          <p>브랜드 스토리, 팀의 아이디어, 그리고 소식을 전합니다.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-3">
            {POSTS.map((p) => (
              <div className="cell" key={p.title}>
                <PhotoSlot
                  src={`${process.env.PUBLIC_URL}/images/journal/${p.image}`}
                  alt={p.title}
                  caption={p.title}
                  ratio="3/2"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                    objectPosition: "center",
                    backgroundColor: "var(--ivory-deep)",
                  }}
                />

                <div style={{ padding: "20px 4px 0" }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--sage)",
                      marginBottom: 8,
                    }}
                  >
                    {p.cat}
                  </div>

                  <div
                    className="cap-title"
                    style={{
                      fontSize: 17,
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </div>

                  <div
                    style={{
                      fontSize: 13.5,
                      color: "var(--brown-soft)",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Journal;
