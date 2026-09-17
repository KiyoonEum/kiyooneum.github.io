# Kiyoon Eum — Aqua multipage homepage

## 이번 버전

홈에는 소개와 4개 메뉴만 있고, 각 메뉴가 실제 HTML 페이지를 엽니다.
기존 논문 5편, CV, 발표 5개와 전체 초록, PDF 3개, 프로필 사진을 보존했습니다.
BANG 문구와 인용문은 없습니다.

## 파일별 편집 위치

| 파일 | 내용 |
|---|---|
| index.html | 첫 화면의 소개, 사진, 이메일, 메뉴 버튼 |
| papers.html | 논문 제목, 출판 정보, 링크 |
| cv.html | 학력, 연구 관심사, 강의 경력 |
| talks.html | 발표 행사, 장소, 제목, 초록, 링크 |
| materials.html | 노트·슬라이드 제목과 PDF 링크 |
| style.css | 모든 페이지의 색상·글꼴·여백·배경 |
| navigation.js | 이전 #papers / #cv / #talks / #misc 주소 호환 |
| assets/hero-aqua.png | 기존 1번 배경 이미지 |
| misc/ | 기존 PDF 자료 |

각 HTML 안에 한국어 편집 주석이 있습니다. 별도 설치나 빌드 없이 index.html을 열어 확인할 수 있습니다.
메뉴·이름·이메일을 변경할 때는 5개 HTML 파일의 공통 헤더·푸터도 함께 수정하세요.
CV PDF는 제공된 원본에 없으므로 다운로드 버튼을 만들지 않았습니다. cv.html은 인쇄에 맞춘 스타일을 포함합니다.

## GitHub Pages에 적용

압축을 풀고 `kiyooneum.github.io-main` 폴더 **안의 내용 전체**를 기존 저장소 최상위에 업로드합니다.
기존 index.html / style.css를 교체하고 새 papers.html / cv.html / talks.html / materials.html / navigation.js도 함께 올려야 합니다.
기존 자료는 지울 필요가 없습니다. main 브랜치의 /(root)를 배포 대상으로 설정한 저장소에서 사용할 수 있습니다.
모든 내부 링크가 상대 경로라 homepage-test 같은 프로젝트 저장소에서도 동작합니다.

GitHub에 올린 뒤 해당 커밋의 Pages 배포가 완료된 것을 확인하고 새로고침하세요.
이번 버전은 CSS와 배경 이미지 URL에 버전을 붙였습니다. 배경을 새로 덮어쓰면 style.css의
--hero-image 뒤 ?v=20260916-1 값을 바꾸고, 5개 HTML의 style.css?v=... 값도 새 값으로 바꿔주세요.
질의 문자열은 파일 이름에 포함시키지 않습니다.

sitemap.xml은 실제 홈페이지 https://kiyooneum.github.io/ 기준입니다.
다른 주소를 최종 홈페이지로 사용할 경우 sitemap의 주소를 변경하세요.
기존 검색 인증 HTML은 그대로 보존했습니다.
