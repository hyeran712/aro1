# 카카오톡 문의 알림 연결

문의 폼 → Cloudflare Worker → 연결된 카카오 계정의 ‘나와의 채팅’으로 전달합니다.
문의 본문은 별도로 저장하지 않으며 카카오 전송이 확인되어야 접수 완료를 표시합니다.
무료 사용량 및 카카오 일일 쿼터 내에서 사용하세요. 계정 연결/배포 전에는 실제로 전송되지 않습니다.

## 1. 카카오 계정 준비

1. https://developers.kakao.com 에서 앱을 만들고 카카오 로그인을 활성화합니다.
2. 웹 플랫폼/사이트 도메인에 `https://hyeran712.github.io`를 등록합니다.
3. 카카오톡 메시지 전송 동의항목(`talk_message`)을 설정하고 받는 계정으로 로그인하여 동의합니다. 개발 중 다른 계정을 쓰면 앱 팀원 등록 등 해당 앱 이용 자격도 확인하세요.
4. REST API 키 설정의 카카오 로그인 리다이렉트 URI에 `http://localhost:8788/callback`을 등록합니다. 이 폴더에서 `node connect.mjs`를 실행하고 `http://localhost:8788/`을 열어 키와 시크릿을 입력한 뒤 받는 계정으로 로그인합니다. 완료 화면의 JSON에 refresh_token이 들어 있습니다. REST API 테스트 도구의 액세스 토큰만으로는 자동 갱신을 설정할 수 없습니다.
5. 토큰은 채팅이나 소스 코드에 붙이지 말고 아래 KV에 직접 저장하세요.

공식 절차: https://developers.kakao.com/docs/ko/kakaologin/rest-api
메시지 API: https://developers.kakao.com/docs/ko/kakaotalk-message/rest-api

## 2. Worker 배포

Cloudflare 계정을 준비하고 이 폴더에서 아래 명령을 실행합니다(Node.js 필요).

```powershell
npx wrangler login
npx wrangler kv namespace create KAKAO_TOKENS
```

출력된 namespace ID를 `wrangler.toml`의 `id`에 넣습니다.
Cloudflare 대시보드의 해당 KV namespace에서 키 `recipient`를 만들고 값에 아래 JSON을 저장합니다.
`여기에...` 부분은 실제 refresh token으로 교체합니다.

```json
{"refresh_token":"여기에_받는_계정의_refresh_token"}
```

```powershell
npx wrangler secret put KAKAO_CLIENT_ID
npx wrangler secret put KAKAO_CLIENT_SECRET
npx wrangler deploy
```

CLIENT_ID에는 REST API 키를 넣고 CLIENT_SECRET에는 해당 앱의 클라이언트 시크릿을 넣습니다.
시크릿을 사용하지 않는 앱이면 두 번째 명령은 생략합니다.
Worker는 액세스 토큰을 자동 발급하고 새 refresh token이 반환되면 KV에 저장합니다.
장기간 문의가 없거나 동의 철회/토큰 만료가 발생하면 계정을 다시 연결해야 합니다.

## 3. 사이트 연결

운영 문의 주소는 프로젝트 루트의 `.env.production`에 저장되어 있습니다.
별도 주소를 테스트할 때는 `.env.local`을 만들고 배포된 주소를 입력합니다.

```dotenv
REACT_APP_INQUIRY_API_URL=https://aro-inquiry.본인주소.workers.dev/inquiry
```

사이트를 다시 빌드하고 배포합니다. 도메인을 바꾸면 Worker의 ALLOWED_ORIGIN과 SITE_URL,
카카오 웹 도메인도 함께 바꾸세요. 로컬 점검 때는 별도 Worker에서 ALLOWED_ORIGIN을
`http://localhost:3000`으로 설정합니다.

## 나중에 받는 사람 바꾸기

새로 받을 사람이 같은 카카오 앱으로 로그인하고 메시지 전송에 동의한 뒤,
그 사람의 refresh token으로 KV의 `recipient` 값 전체를 위 JSON 형식으로 덮어씁니다.
기존 access_token을 남기지 마세요. 사이트를 수정하거나 재배포할 필요는 없습니다.
다른 카카오 앱으로 바꾸면 CLIENT_ID와 CLIENT_SECRET도 바꿔야 합니다.

## 확인

실제 문의 한 건을 보내 ‘나와의 채팅’ 수신과 사이트 접수 완료를 함께 확인하세요.
동일 IP는 분당 약 3건으로 제한합니다. Origin 검사는 인증 수단이 아니므로 공개 운영 중
스팸이 발생하면 Turnstile 같은 추가 검증을 도입하세요.
네트워크 응답이 끊기면 이미 메시지가 도착했어도 실패 안내가 나올 수 있습니다.
