# Starter Kit

신규 프로젝트를 빠르게 시작하기 위한 템플릿/생성 스크립트입니다.

## 구성
- `new-project-template/`: 문서+프로토타입 기본 템플릿
- `init-project.ps1`: 템플릿 복제 자동화 스크립트

## 사용법
PowerShell에서 아래 명령으로 새 프로젝트 폴더를 생성합니다.

```powershell
.\starter-kit\init-project.ps1 -ProjectName "고객사 프로젝트명" -DestinationRoot "D:\Dev\Projects\00.DeepSpace\1.source"
```

## 생성 결과
- 대상 루트 아래에 영문 슬러그 폴더가 생성됩니다.
- `project.config.json`이 자동 생성됩니다.
- `docs/00_프로젝트정의.md`부터 문서 작업을 시작하면 됩니다.
