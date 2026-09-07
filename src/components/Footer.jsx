import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="foot-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/aro-logo.png`}
                alt="ARO"
              />
            </Link>

            <p>
              베뉴와 부부의 선택을 식탁으로 옮기는 일. 안주림 그룹 — 일상이
              특별해지는 맛과 브랜드.
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h5>ABOUT</h5>

            <ul>
              <li>
                <Link to="/about">브랜드 소개</Link>
              </li>

              <li>
                <Link to="/about#attitude">철학 · 태도</Link>
              </li>
            </ul>
          </div>

          {/* SERVICE */}
          <div>
            <h5>SERVICE</h5>

            <ul>
              <li>
                <Link to="/service">웨딩 케이터링</Link>
              </li>

              <li>
                <Link to="/service">야외 · 대외 행사</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h5>CONTACT</h5>

            <ul>
              <li>hello@aro-catering.kr</li>

              <li>02-1234-5678</li>

              <li>서울시 강남구 언주로 00길 00</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div>© ARO CATERING &amp; EVENTS. 시안 draft.</div>

          <a
            href="https://www.instagram.com/atelieraro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @atelieraro
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
