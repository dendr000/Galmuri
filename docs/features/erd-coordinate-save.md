# ERD 좌표 자동 저장

## 개요

SQL ERD 보기(`SqlErdViewer`)에서 테이블 상자를 옮기면, 상자 위치(좌표)를 JSON 파일로 서버에 저장해 다음에 열 때 같은 배치로 보여 줍니다.

## 용어 설명

- **ERD**: 테이블 사이의 관계를 그림으로 나타낸 도표 (Entity Relationship Diagram).
- **좌표**: 화면에서 각 테이블 상자가 놓인 위치(x, y 숫자).
- **백엔드 서버**: `npm run server` 로 켜지는 작은 서버(`src/server.js`, 주소 `127.0.0.1:3001`). 브라우저는 파일을 직접 쓸 수 없어서 서버가 대신 씁니다.

## 동작

1. 화면(`SqlErdViewer.jsx`)이 `POST /api/save-coords` 로 `fileName` 과 `coords` 를 보냅니다.
2. 서버(`src/server.js`)가 `src/data/coordinate/<fileName>` 에 JSON 으로 저장합니다. 폴더가 없으면 만듭니다.
3. 저장 폴더는 `src/config/paths.js` 의 `COORDINATE_DIR` 이 계산합니다. 소스 파일 위치 기준이라 프로젝트 폴더 이름·위치와 무관합니다.

## 변경 이력 요약

- 0.0.1: 저장 폴더가 `C:\dev\MarkdownEditor\src\data\coordinate` 로 박혀 있던 것을 위치 기준 계산으로 바꿨습니다. (폴더 이름을 `Galmuri` 로 바꾸면 이전 코드는 옛 이름의 폴더를 새로 만들어 저장했습니다.)

## 주의

- `src/data/` 는 사용자 데이터 폴더라 `.gitignore` 로 저장소에서 제외됩니다.
- 기존 좌표 파일이 옛 폴더(`C:\dev\MarkdownEditor\src\data\coordinate`)에 있었다면 새 폴더로 옮겨야 보입니다.
