# MOAZINE MMP - Magazine Matching Portfolio

## 📖 프로젝트 소개

Instagram 스토리 스타일의 인터랙티브 잡지 매칭 테스트 웹앱입니다. 사용자의 성향과 취향을 파악하여 개인에게 맞는 매거진을 추천해주는 서비스입니다.

## ✨ 주요 기능

- **인터랙티브 테스트**: 5가지 질문을 통한 개인 성향 분석
- **Instagram 스토리 UI**: 친숙하고 직관적인 모바일 우선 인터페이스
- **개인화 추천**: 테스트 결과에 따른 맞춤형 매거진 추천
- **반응형 디자인**: 모바일과 데스크톱 모든 환경에서 최적화된 경험
- **사용자 정보 수집**: 이름과 전화번호를 통한 개인화된 서비스
- **화면 캡쳐 기능**: 📸 버튼을 통한 현재 화면 이미지 저장 (워터마크 포함)

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, 애니메이션, 반응형 디자인
- **Vanilla JavaScript**: ES6+, DOM 조작, 이벤트 처리
- **html2canvas**: 화면 캡쳐 라이브러리

## 📱 화면 구성

1. **인트로 화면**: 서비스 소개 및 시작 버튼
2. **사용자 정보 입력**: 이름과 전화번호 수집
3. **메인 타이틀**: 테스트 제목 및 시작 안내
4. **테스트 화면**: Instagram 스토리 스타일의 질문 및 선택지
5. **결과 화면**: 개인화된 매거진 추천 및 구독 안내

## 📸 화면 캡쳐 기능

- **위치**: 모든 화면 우상단의 📸 버튼
- **기능**: 현재 화면의 컨텐츠 영역을 이미지로 저장
- **워터마크**: "MY MAGAZINE PORTFOLIO" 자동 추가
- **파일명**: `화면캡쳐_타임스탬프.png` 형식
- **알림**: 성공/실패 메시지 표시

## 🎯 테스트 결과 유형

- **Ambitious**: 성공도 슬럽고 야심도 차십니다
- **Creative**: 창의성과 영감을 추구하는 타입
- **Lifestyle**: 일상의 품격을 중시하는 타입
- **Business**: 비즈니스와 성장에 관심이 많은 타입
- **Culture**: 문화와 예술을 사랑하는 타입

## 🚀 실행 방법

1. 저장소 클론
```bash
git clone https://github.com/yibone-ai/MOAZINE_MMP.git
```

2. 프로젝트 폴더로 이동
```bash
cd MOAZINE_MMP
```

3. 로컬 서버 실행 (Live Server 또는 Python 서버)
```bash
# Live Server 사용 (VS Code 확장)
# 또는 Python 서버
python -m http.server 8000
```

4. 브라우저에서 `http://localhost:8000` 접속

## 📂 프로젝트 구조

```
MOAZINE_MMP/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
└── README.md           # 프로젝트 문서
```

## 🎨 디자인 특징

- **다크 테마**: 세련된 검은색 배경
- **그라데이션**: 시각적 임팩트를 위한 그라데이션 효과
- **애니메이션**: 부드러운 전환 효과와 호버 인터랙션
- **모바일 퍼스트**: 375px × 667px 모바일 뷰포트 최적화

## 🔧 커스터마이징

### 질문 수정
`script.js`의 `questions` 배열에서 질문과 선택지를 수정할 수 있습니다.

### 결과 유형 추가
`resultTypes` 객체에서 새로운 결과 유형을 추가하거나 기존 내용을 수정할 수 있습니다.

### 스타일 변경
`style.css`에서 색상, 폰트, 레이아웃 등을 자유롭게 수정할 수 있습니다.

## 📱 반응형 지원

- **모바일**: 375px × 667px (iPhone 기준)
- **데스크톱**: 768px 이상에서 중앙 정렬된 모바일 뷰

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 📞 연락처

프로젝트 관련 문의: [GitHub Issues](https://github.com/yibone-ai/MOAZINE_MMP/issues)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!