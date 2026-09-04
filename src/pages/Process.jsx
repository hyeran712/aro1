import Header from '../components/Header';
import Footer from '../components/Footer';

const STEPS = [
  ['베뉴 인터뷰', '베뉴 운영자가 자기 공간의 결과 운영 방식을 알려주는 시간. 가장 공들여 듣는 시간입니다.'],
  ['부부 의사와 특이사항 확인', '베뉴가 정한 틀 안에서 부부가 어떤 선택을 했는지, 특이사항까지 꼼꼼히 파악합니다.'],
  ['음식으로 만들기', '베뉴와 부부의 선택을 음식으로 옮깁니다. 메뉴 장르 · 세팅 · 온도를 결정합니다.'],
  ['새김', '다섯 가지 태도에 맞춰 음식을 만들고 식탁을 차리고, 그날을 마무리합니다.'],
];

const FAQS = [
  ['최소 인원 기준이 있나요?', '베뉴와 행사 규모에 따라 달라집니다. 상담 시 자세히 안내해드립니다.'],
  ['시식이 가능한가요?', '베뉴 인터뷰 이후 일정에 맞춰 시식 자리를 마련합니다.'],
  ['야외 · 대외 행사도 지금 신청할 수 있나요?', '현재 순차적으로 준비 중입니다. 문의를 남겨주시면 우선 안내드립니다.'],
];

function Process() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">PROCESS</div>
          <h1>상담부터 진행까지,<br />체계적인 프로세스로 진행합니다.</h1>
          <p>메뉴와 조건이 달라져도 ARO의 4단계는 변하지 않습니다.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="process-track">
            {STEPS.map(([title, desc], i) => (
              <div className="process-item" key={title}>
                <div className="process-num">{i + 1}</div>
                <div className="process-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory-deep)' }}>
        <div className="wrap">
          <div className="label">FAQ</div>
          <h2 className="section-title">자주 묻는 질문</h2>
          <div style={{ marginTop: 40, borderTop: '1px solid var(--line)' }}>
            {FAQS.map(([q, a]) => (
              <div style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }} key={q}>
                <div style={{ fontSize: 15.5, color: 'var(--brown)', marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 14, color: 'var(--brown-soft)' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Process;
