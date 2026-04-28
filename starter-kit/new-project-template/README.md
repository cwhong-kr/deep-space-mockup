# New Project Template (Prototype)

고객 요구사항/회의록 기반으로 인터랙티브 프로토타입을 만드는 공통 템플릿입니다.

## 1) 시작 순서
1. `customer-input/`에 고객 원문 자료를 먼저 적재합니다.
2. `docs/00~02`에서 프로젝트 정의와 요구사항 정제를 완료합니다.
3. `scenarios/`, `flows/` 문서를 채운 뒤 프로토타입을 구현합니다.
4. `docs/09_프로토타입_체크리스트.md`로 품질 점검합니다.

## 2) 폴더 구조
- `customer-input/`: 고객 원문(요구사항/회의록/레퍼런스)
- `docs/`: 정의/정제/의사결정/변경이력/체크리스트
- `scenarios/`: 사용자 시나리오
- `flows/`: 화면 목록 및 플로우 문서
- `prototype/`: HTML/CSS/JS 목업 구현
- `assets/`: 공통 에셋

## 3) 권장 산출물 흐름
`고객 원문 -> 요구사항 정제 -> 사용자 시나리오 -> 화면목록/서비스플로우 -> 프로토타입`

## 4) 자동 생성 스크립트
템플릿 복제를 자동화하려면 상위 `starter-kit` 폴더에서 아래 명령을 실행합니다.

```powershell
.\init-project.ps1 -ProjectName "고객사 프로젝트명" -DestinationRoot "D:\Dev\Projects\00.DeepSpace\1.source"
```
