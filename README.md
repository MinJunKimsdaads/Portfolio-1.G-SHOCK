# G-SHOCK | Brand Portfolio Website

> G-SHOCK by Casio 브랜드를 주제로 제작한 프론트엔드 포트폴리오 프로젝트입니다.
> HTML, CSS, JavaScript의 기초를 직접 구현하며 학습했습니다.

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/>
</div>

---

## Live Demo

| 페이지 | 링크 |
|--------|------|
| 홈페이지 | [Demo - index.html](https://minjunkimsdaads.github.io/Portfolio-1.G-SHOCK/) |
| 프리미엄 컬렉션 | [Demo - sub1.html](https://minjunkimsdaads.github.io/Portfolio-1.G-SHOCK/sub1.html) |

<img src="http://aaeexx.dothome.co.kr/project/image/gshock/1.gif" alt="homepage preview">
<img src="http://aaeexx.dothome.co.kr/project/image/gshock/2.gif" alt="premium page preview">

---

## Features

- **Hero Section** — 풀스크린 비디오 배경 + 스크롤 시 헤더 색상 전환 및 로고 교체
- **Product Carousels** — NEW / Collection / Goods 3가지 섹션 Smooth Scroll 캐러셀
- **Premium Collection Page** — MRG / MTG / Limited 필터 버튼으로 제품 이미지 동적 전환
- **Scroll Fade-in** — IntersectionObserver 기반 이미지 페이드인 애니메이션
- **Scroll-to-top** — 푸터 버튼으로 페이지 최상단 이동

---

## Project Structure

```
Portfolio-1.G-SHOCK/
├── index.html              # 메인 홈페이지
├── sub1.html               # 프리미엄 컬렉션 상세 페이지
├── css/
│   ├── style.css           # 메인 페이지 스타일
│   └── stylesub.css        # 서브 페이지 스타일
├── js/
│   ├── hearder_change.js   # (미사용) 헤더 스크롤 핸들러
│   └── scrollbutton_article1.js  # (미사용) 캐러셀 버튼
└── image/                  # 정적 이미지 및 동영상 에셋
    ├── header/
    ├── section_article1/
    ├── section_article2/
    ├── section_article3/
    ├── section_decription/
    ├── common/
    └── footer_icon/
```

---

## Getting Started

별도 빌드 없이 `index.html`을 브라우저에서 직접 열거나, 로컬 서버로 실행합니다.

```bash
# npx serve 사용
npx serve .

# Python 사용
python -m http.server 8000
```

---

## 개발 노트

- **jQuery 3.6.0** — DOM 조작 및 fadeIn 애니메이션에 사용
- **IntersectionObserver** — 스크롤 이벤트 대신 사용하여 성능 개선 (하드코딩된 px 값 제거)
- **CSS Custom Properties** — `--font-primary`, `--color-black`, `--transition-hover` 등 변수로 일관성 유지
- **scrollBy API** — `behavior: 'smooth'` 옵션으로 캐러셀 부드러운 스크롤 구현
- **Google Fonts** — Noto Sans Display (300) · Noto Sans — 단일 요청으로 병합

---

## 소감

> 처음 HTML/CSS/JavaScript를 공부하면서 만든 프로젝트입니다.
> 같은 패턴의 코드가 반복되는 걸 느꼈고, 컴포넌트 기반 설계의 필요성을 체감했습니다.
> jQuery가 Vanilla JS보다 간결하다는 걸 알게 됐지만,
> 이후 IntersectionObserver 같은 네이티브 Web API로 대체할 수 있다는 것도 배웠습니다.

---

<sub>2023-10-19 노션 → GitHub 이동</sub>
