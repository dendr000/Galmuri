# 업데이트 내역 (CHANGELOG)

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/), 버전은 [유의적 버전](https://semver.org/lang/ko/) 을 따릅니다.

## [Unreleased]

### 변경 (Changed)
- 프로젝트 폴더 이름을 `MarkdownEditor` 에서 `Galmuri` 로 바꾸고, 실행 배치 파일을 `GalmuriStart.bat` 으로 바꿨습니다. 이제 이 배치 파일은 자기 폴더에서 실행하므로 폴더 위치가 바뀌어도 동작합니다.
- 모든 코드 파일 상단에 저작권 한 줄을 넣고, `NOTICE.md` 를 추가했습니다.
- 문서 위치를 정리했습니다. 시작 가이드는 `docs/getting-started.md`, 파일 구조는 `docs/filetree.md`, 실행 화면 그림은 `docs/images/run.png` 입니다.

### 제거 (Removed)
- 쓰지 않던 기본 템플릿 이미지(`src/assets`, `public/icons.svg`, `public/favicon.svg`)와 빈 파일 `TemplateSelector.jsx` 를 지웠습니다.

## [0.0.1] - 2026-10-21 13:05

### 수정 (Fixed)
- 프로젝트 폴더 이름이나 위치를 바꾸면 ERD 좌표가 엉뚱한 곳(`C:\dev\MarkdownEditor\...`)에 저장되던 문제를 고쳤습니다. 이제 항상 프로젝트 안의 `src/data/coordinate` 에 저장됩니다.
