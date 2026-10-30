# 공유 미리보기

카카오톡 등 링크 공유 미리보기는 public/index.html의 Open Graph 메타 태그를 사용합니다.
이미지는 기존 public/images/aro-logo.png이며 JavaScript 실행 없이 읽을 수 있습니다.

빌드가 끝나면 scripts/finalize-build.cjs가 이미지와 사이트 주소를 절대 주소로 채웁니다.
기본 GitHub Pages 주소는 package.json의 homepage를 사용합니다.
Netlify는 netlify.toml로 루트 경로에 빌드하며 자동 제공하는 URL 환경변수로
해당 사이트 도메인의 로고 주소를 만듭니다. 도메인 변경 뒤에는 다시 빌드/배포하세요.
필요하면 ARO_SITE_URL 환경변수로 최종 사이트 주소를 명시할 수 있습니다.

카카오가 이전 미리보기를 기억하면 카카오 개발자 도구의 공유 디버거에서
공유한 URL의 캐시를 초기화한 뒤 새 메시지로 링크를 보내 확인하세요.
기존에 전송된 메시지의 카드가 자동 변경되지는 않을 수 있습니다.

Netlify로 이전하면 카카오 문의 전송 서버의 ALLOWED_ORIGIN/SITE_URL과
카카오 앱의 허용 도메인도 새 주소에 맞춰 변경해야 합니다.
