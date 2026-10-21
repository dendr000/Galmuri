# 파일 구조 (Galmuri)

> 저장소가 추적하는 파일의 현재 구조입니다. 파일을 만들거나 옮기거나 지우면 이 문서도 함께 고칩니다.

## 용어 설명

- **트리(tree)**: 폴더 안에 폴더·파일이 들어 있는 모양을 나뭇가지처럼 그린 것.
- **추적 파일**: 깃(Git)이 변경 이력을 관리하는 파일. `node_modules`, `build`, `src/data` 처럼 `.gitignore` 에 적힌 것은 여기에 없습니다.

## 구조

```text
Galmuri
├── docs/  # 문서
│   ├── features/  # 기능별 설명서
│   │   └── erd-coordinate-save.md
│   ├── images/  # 문서에 쓰는 그림
│   │   └── run.png  # 실행 화면 캡처
│   ├── filetree.md  # 현재 파일 구조 명세서 (이 문서)
│   ├── getting-started.md  # 신규 클론·로컬 실행 가이드
│   ├── library.md  # 초기 설치 명령 메모
│   └── troubleshooting.md
├── public/  # 정적 파일 (브라우저에서 그대로 제공)
│   └── logo.svg
├── src/  # 프론트엔드·백엔드 소스
│   ├── api/
│   │   ├── browserDb.js  # 브라우저 내장 가상 파일 시스템(IndexedDB) 모듈
│   │   └── fileApi.js  # 백엔드 서버 및 브라우저 DB 통신 어댑터 API
│   ├── components/
│   │   ├── common/
│   │   │   └── Modal.css  # 모달 공통 스타일
│   │   ├── diagram/
│   │   │   ├── forms/
│   │   │   │   ├── FlowchartForm.jsx
│   │   │   │   ├── GeoJsonForm.jsx
│   │   │   │   ├── PieChartForm.jsx
│   │   │   │   ├── SequenceForm.jsx
│   │   │   │   └── StlForm.jsx
│   │   │   ├── DiagramModal.css
│   │   │   └── DiagramModal.jsx  # Mermaid 다이어그램 모달
│   │   ├── editor/
│   │   │   ├── styles/  # 에디터 및 툴바 스타일 분리본
│   │   │   │   ├── SuggestPopup.css  # 자동완성 팝업 스타일
│   │   │   │   ├── ToolbarBase.css  # 툴바 기본 레이아웃 스타일
│   │   │   │   └── ToolbarDropdown.css  # 툴바 드롭다운 메뉴 스타일
│   │   │   ├── toolbar/  # 툴바 아이콘 및 그룹 컴포넌트
│   │   │   │   ├── groups/  # 분할된 툴바 기능 그룹
│   │   │   │   │   ├── DatabaseGroup.jsx  # 데이터베이스 특화 도구 모음 그룹
│   │   │   │   │   ├── GithubGroup.jsx  # GitHub 확장 툴바 그룹
│   │   │   │   │   └── MarkdownGroups.jsx  # 마크다운 기본 툴바 그룹
│   │   │   │   ├── sqlBuilder/  # 시각적 SQL 쿼리 빌더 전용 컴포넌트 모음
│   │   │   │   │   ├── dcl/  # DCL 권한 제어 모드 전용 컴포넌트
│   │   │   │   │   │   ├── DclMatrixPanel.jsx  # DCL 권한 제어 매트릭스 메인 패널 (오케스트레이터)
│   │   │   │   │   │   ├── DclMatrixRow.jsx  # DCL 매트릭스 개별 행 컴포넌트
│   │   │   │   │   │   ├── DclMatrixTable.jsx  # DCL 매트릭스 표 컨테이너
│   │   │   │   │   │   ├── DclPreview.jsx  # DCL 실시간 컴파일 뷰어
│   │   │   │   │   │   └── DclToolbar.jsx  # DCL 상단 제어 바
│   │   │   │   │   ├── ddl/  # DDL 스키마 정의 모드 전용 컴포넌트
│   │   │   │   │   │   ├── DdlGridPanel.jsx  # DDL 스키마 제어 메인 패널 (오케스트레이터)
│   │   │   │   │   │   ├── DdlGridRow.jsx  # DDL 그리드 개별 행 컴포넌트
│   │   │   │   │   │   ├── DdlGridTable.jsx  # DDL 스프레드시트 헤더 및 리스트 컨테이너
│   │   │   │   │   │   ├── DdlImportArea.jsx  # DDL 역설계 파싱 입력 영역
│   │   │   │   │   │   ├── DdlPreview.jsx  # DDL 실시간 컴파일 뷰어
│   │   │   │   │   │   └── DdlToolbar.jsx  # DDL 상단 제어 바
│   │   │   │   │   └── dml/  # DML 데이터 조작 모드 전용 컴포넌트
│   │   │   │   │       ├── DmlFilterPanel.jsx  # DML 쿼리 필터 및 정렬 제어 패널
│   │   │   │   │       ├── DmlGridPanel.jsx  # DML 그리드 제어 메인 패널 (오케스트레이터)
│   │   │   │   │       ├── DmlGridRow.jsx  # DML 그리드 개별 행 컴포넌트
│   │   │   │   │       ├── DmlIndexRecommendation.jsx  # DML 스마트 인덱스 추천 뷰어
│   │   │   │   │       ├── DmlPreview.jsx  # DML 실시간 컴파일 뷰어
│   │   │   │   │       ├── DmlSidebar.jsx  # DML 드래그 앤 드롭 테이블 사이드바
│   │   │   │   │       └── DmlTableNode.jsx  # DML React Flow 커스텀 테이블 노드
│   │   │   │   ├── CommitGuideModal.jsx
│   │   │   │   ├── DetailsModal.jsx
│   │   │   │   ├── FindReplaceModal.jsx  # 찾기 및 바꾸기 모달
│   │   │   │   ├── GlobalSearchModal.jsx  # 전역 검색 및 일괄 치환 모달
│   │   │   │   ├── MathModal.jsx
│   │   │   │   ├── MockDataModal.jsx
│   │   │   │   ├── PortalDropdown.jsx
│   │   │   │   ├── SqlQueryBuilderModal.jsx  # 시각적 SQL 쿼리 빌더 대형 모달
│   │   │   │   ├── TemplateModal.jsx
│   │   │   │   └── ToolbarGroups.jsx  # 툴바 아이콘 묶음 분리 파일 (인덱스)
│   │   │   ├── AutocompletePopup.jsx  # 가상 자동완성 팝업 UI
│   │   │   ├── CodeOverlay.jsx  # 구문 강조(Syntax Highlighting) 및 줄 번호 오버레이
│   │   │   ├── ColorPickerOverlay.jsx  # CSS Hex 색상 픽커 오버레이
│   │   │   ├── Editor.css
│   │   │   ├── Editor.jsx  # 메인 에디터 (마크다운 입력부 - 단일 구조)
│   │   │   ├── EditorCodeMode.css  # 코드 모드 전용 스타일 분리본
│   │   │   ├── EditorModals.jsx
│   │   │   ├── EditorToolbar.css  # 툴바 및 팝업 전용 스타일 분리본 (인덱스)
│   │   │   ├── EditorToolbarArea.jsx
│   │   │   ├── EditorWorkspace.jsx
│   │   │   └── OutlineMinimap.jsx  # 우측 목차(미니맵) 컴포넌트
│   │   ├── explorer/
│   │   │   ├── ExplorerTreeNode.jsx  # 탐색기 개별 폴더/파일 메인 렌더링 노드
│   │   │   ├── FileExplorer.jsx  # 좌측 탐색기 메인 컴포넌트
│   │   │   ├── NodeActions.jsx  # 파일/폴더 추가, 수정, 삭제 액션 버튼 그룹
│   │   │   ├── NodeTooltip.jsx  # 상대 경로 표시 및 클립보드 복사 툴팁
│   │   │   └── WorkspaceConfig.jsx  # 상단 워크스페이스 경로 및 히스토리 제어바
│   │   ├── preview/
│   │   │   ├── CodeBlockRenderer.jsx  # 코드 블록 렌더러 분리
│   │   │   ├── DiffViewer.jsx  # 파일 분할 비교 뷰어 (Split Diff Viewer)
│   │   │   ├── ErdNode.jsx  # ERD 다이어그램 커스텀 노드 렌더러
│   │   │   ├── GeoJsonBlock.jsx
│   │   │   ├── LinkRenderer.jsx  # 뷰어 내 상대 경로 링크 가로채기 모듈
│   │   │   ├── MermaidBlock.jsx
│   │   │   ├── PreviewBase.css  # 실시간 뷰어 기본 레이아웃 스타일
│   │   │   ├── PreviewCodeBlock.css  # 코드 블록 및 시각화 스타일
│   │   │   ├── PreviewExtensions.css  # GitHub 확장 서식 스타일
│   │   │   ├── SqlErdViewer.jsx  # SQL 기반 ERD 시각화 및 자동 저장 뷰어
│   │   │   ├── SqlFlowViewer.jsx  # SQL 리니지 데이터 흐름 다이어그램 렌더러
│   │   │   ├── SqlViewer.jsx  # SQL 전용 시각화 뷰어
│   │   │   └── StlBlock.jsx
│   │   ├── table/
│   │   │   ├── html-table/
│   │   │   │   ├── HtmlTable.css
│   │   │   │   ├── HtmlTableControls.jsx
│   │   │   │   ├── HtmlTableGrid.jsx
│   │   │   │   ├── ToolbarStructure.jsx
│   │   │   │   └── ToolbarStyle.jsx
│   │   │   ├── HtmlTable.css
│   │   │   ├── HtmlTableModal.jsx
│   │   │   ├── TableModal.css
│   │   │   └── TableModal.jsx
│   │   ├── tree/
│   │   │   ├── FolderTreeModal.css
│   │   │   ├── FolderTreeModal.jsx  # 폴더 구조도 마크다운 생성기
│   │   │   └── TreeNodeItem.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx  # 상단 헤더 (테마 및 스토리지 스위칭 포함)
│   │   ├── Preview.css  # 실시간 뷰어 레이아웃 및 github-markdown-css 오버라이드 스타일 (인덱스)
│   │   └── Preview.jsx  # 실시간 뷰어 메인 컴포넌트 (마크다운 파싱)
│   ├── config/  # 서버 고정 경로 계산
│   │   └── paths.js
│   ├── controllers/
│   │   └── fileController.js  # 백엔드 로컬 시스템 접근 핵심 로직 제어
│   ├── hooks/
│   │   ├── app/
│   │   │   ├── useFileLoader.js  # App.jsx 파일 로드/라우팅 제어 훅
│   │   │   └── useScrollSync.js  # 양면 스크롤 동기화 연산 훅
│   │   ├── editor/
│   │   │   ├── core/
│   │   │   │   ├── useAutoSave.js
│   │   │   │   ├── useEditor.js  # 에디터 기본 조작 및 단축키 제어 훅
│   │   │   │   ├── useImageUpload.js
│   │   │   │   ├── useKeyMap.js
│   │   │   │   ├── useModalState.js
│   │   │   │   └── useTextFormat.js
│   │   │   ├── typing/
│   │   │   │   ├── useAutoTyping.js  # 괄호 및 HTML 태그 자동 닫기 등 타이핑 어시스트 훅
│   │   │   │   ├── useCodeFormatter.js  # 단축키 기반 코드 포매팅 제어 훅
│   │   │   │   ├── useCommentToggle.js  # 확장자 기반 주석(Ctrl+/) 토글 제어 훅
│   │   │   │   ├── useSnippetExpand.js  # 예약어 치환 및 스니펫(Ctrl+Space) 전개 훅
│   │   │   │   ├── useSqlFormatter.js
│   │   │   │   └── useTypingManager.js
│   │   │   ├── ui/
│   │   │   │   ├── useAutocomplete.js  # 예약어 추천 및 팝업 제어 훅
│   │   │   │   └── useColorPicker.js  # CSS 색상 픽커 상태 연동 훅
│   │   │   └── useOutline.js  # 마크다운 헤딩 목차 추출 훅
│   │   ├── table/
│   │   │   └── useTableGrid.js
│   │   └── useHtmlTable.js
│   ├── routes/
│   │   └── api.js  # 백엔드 Express 라우터 정의부
│   ├── utils/
│   │   ├── editor/
│   │   │   ├── codeDictionary.js  # 언어별 스니펫, 주석 기호 등 통합 데이터 사전
│   │   │   ├── codeFormatter.js  # 각 언어별 들여쓰기 및 정렬 연산 유틸
│   │   │   ├── diffUtils.js  # LCS 알고리즘 기반 텍스트 비교 연산 연산 유틸
│   │   │   ├── mockGenerator.js
│   │   │   ├── sqlDclGenerator.js  # DCL 권한 매트릭스 SQL 컴파일러
│   │   │   ├── sqlDictGenerator.js  # SQL 기반 테이블 명세서 마크다운 생성 유틸
│   │   │   ├── sqlDmlGenerator.js  # DML 시각적 조인 워크스페이스 SQL 컴파일러
│   │   │   ├── sqlDmlReverseParser.js  # DML 역설계 파서 모듈 (조인, 서브쿼리 등 분석)
│   │   │   ├── sqlExportUtils.js  # 조립된 쿼리를 JPA Entity, DBML 및 백엔드 3계층 코드(Repo, Service, API)로 내보내는 확장 모듈
│   │   │   ├── sqlGenerator.js  # DDL 스프레드시트 그리드 SQL 컴파일러
│   │   │   ├── sqlIndexRecommender.js  # DML 쿼리 기반 인덱스(Index) 자동 추천 유틸
│   │   │   ├── sqlLinter.js  # 정규식 기반 SQL 문법 오류 감지 유틸
│   │   │   ├── sqlMigrationGenerator.js  # DDL 스냅샷 Diff 추적 기반 마이그레이션(ALTER TABLE) 스크립트 생성기
│   │   │   ├── sqlReverseParser.js  # CREATE TABLE 텍스트를 파싱하는 역설계 모듈
│   │   │   └── syntaxHighlighter.js  # 정규식 기반 구문 강조 파서
│   │   ├── clipboard.js
│   │   ├── colorPresets.js
│   │   ├── diagramParser.js
│   │   ├── editorCore.js  # 에디터 DOM 제어 및 VSC 스타일 들여쓰기 래퍼
│   │   ├── githubMarkdownParser.js  # GitHub 고유 문법 파싱 프리프로세서
│   │   ├── htmlTableParser.js
│   │   ├── localDb.js
│   │   ├── pathUtils.js  # 파일 트리 상대 경로 연산 유틸
│   │   ├── tableConverter.js
│   │   ├── templates.js
│   │   └── treeGenerator.js
│   ├── App.css
│   ├── App.jsx  # 최상위 컴포넌트 (상태 및 레이아웃 관리)
│   ├── index.css
│   ├── main.jsx
│   └── server.js  # 백엔드 서버 진입점(Entry Point)
├── tests/  # 자동 테스트 (node --test)
│   ├── coordinate-path.test.js  # ERD 좌표 저장 경로 테스트
│   └── repo-rules.test.js  # 저작권 한 줄·절대 경로·비밀 파일 규칙 테스트
├── .gitattributes
├── .gitignore
├── .oxlintrc.json
├── CHANGELOG.md  # 업데이트 내역
├── GalmuriStart.bat  # 개발 서버(프론트+백엔드) 동시 실행 배치 파일
├── index.html
├── LICENSE  # MIT 라이선스
├── NOTICE.md  # 다국어 저작권 표기
├── package-lock.json
├── package.json  # 의존성과 실행 스크립트
├── README.md  # 프로젝트 소개와 실행 방법
└── vite.config.js  # Vite 빌드 설정
```

## 브랜치별 차이

- `main`(작업용)과 `deploy`(배포용)는 같은 구조를 쓰되, 배포용에서는 서버 파일 시스템에 의존하는 일부 기능(전역 검색, 파일 비교 뷰)이 빠져 있어 `GlobalSearchModal.jsx`, `DiffViewer.jsx`, `diffUtils.js` 가 없습니다.
