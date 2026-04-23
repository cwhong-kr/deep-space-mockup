# CLAUDE.md

## Project
전기차 워크 라운지 모바일 앱 목업 프로젝트.
목적은 실제 개발 전 UI/UX 컨셉 검증용 HTML 프로토타입 제작이다.

## Design Direction
- 톤: premium, calm, modern
- 키워드: EV charging, lounge, work, reservation, clean mobility
- 모바일 우선, iPhone 16 Pro 기준 폭 우선 고려
- 카드형 UI, 라운드 코너, 여백 넉넉하게
- 과한 색상 사용 금지, 포인트 컬러는 1~2개만 사용

## File Rules
- index.html: 화면 마크업
- styles.css: 전체 스타일
- script.js: 목업용 인터랙션만 작성
- 외부 라이브러리는 꼭 필요할 때만 사용
- 한글 텍스트 기준으로 더미 데이터 작성

## Screen Rules
- 하단 탭바 포함
- 각 화면은 모바일 앱 실서비스처럼 보여야 함
- 헤더 / 본문 / CTA 구조 유지
- 더미 데이터라도 예약, 충전, 좌석, 회의실, 음료 요소를 반영

## Coding Rules
- semantic HTML 사용
- class 명은 읽기 쉽게 작성
- CSS 변수 적극 사용
- 반응형은 mobile-first
- JavaScript는 최소화, 시연 가능한 수준만 구현

## Output Rules
Claude는 항상
1. 수정 파일 목록
2. 변경 요약
3. 전체 코드
순서로 응답한다.