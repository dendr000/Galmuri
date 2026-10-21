// Copyright (c) dendr000. MIT License.
// src/config/paths.js v1.0
/*
 * 파일 위치: src/config/paths.js
 * 연결 위치: src/server.js 에서 호출
 * 기능 요약: 서버가 쓰는 고정 폴더 경로를 이 파일의 위치 기준으로 계산합니다. (프로젝트 폴더 이름이나 위치가 바뀌어도 동작합니다.)
 */
import path from 'path';
import { fileURLToPath } from 'url';

const SRC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ERD 좌표 JSON 파일이 저장되는 폴더 (src/data/coordinate)
export const COORDINATE_DIR = path.join(SRC_DIR, 'data', 'coordinate');
