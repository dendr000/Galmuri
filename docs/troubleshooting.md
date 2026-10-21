# 문제 해결 기록 (Troubleshooting)

## 폴더 이름을 바꿨더니 ERD 좌표가 옛 이름의 폴더에 저장됨

- **증상**: 프로젝트 폴더를 `MarkdownEditor` 에서 `Galmuri` 로 바꾼 뒤 ERD 상자를 옮기면, `C:\dev\MarkdownEditor\src\data\coordinate` 라는 폴더가 다시 생기고 거기에 저장된다.
- **원인**: `src/server.js` 의 저장 폴더가 `path.join('C:', 'dev', 'MarkdownEditor', ...)` 로 절대 경로가 박혀 있었다.
- **해결**: `src/config/paths.js` 에서 소스 파일 위치 기준(`import.meta.url`)으로 경로를 계산하게 바꿨다. `tests/coordinate-path.test.js` 와 `tests/repo-rules.test.js`(절대 경로 `C:\dev` 금지)가 다시 박히는 것을 막는다.
- **관련**: 옛 폴더에 이미 저장된 좌표 파일은 `src/data/coordinate` 로 직접 옮긴다.
