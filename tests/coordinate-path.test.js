// Copyright (c) dendr000. MIT License.
// tests/coordinate-path.test.js v1.0
/*
 * 파일 위치: tests/coordinate-path.test.js
 * 기능 요약: ERD 좌표 저장 폴더가 프로젝트 폴더 이름과 무관하게 이 저장소의 src/data/coordinate 로 계산되는지 확인합니다.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { COORDINATE_DIR } from '../src/config/paths.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('좌표 저장 폴더는 이 저장소의 src/data/coordinate 이다', () => {
  assert.equal(COORDINATE_DIR, path.join(repoRoot, 'src', 'data', 'coordinate'));
});

test('좌표 저장 폴더는 저장소 폴더 안에 있다', () => {
  const rel = path.relative(repoRoot, COORDINATE_DIR);
  assert.ok(!rel.startsWith('..') && !path.isAbsolute(rel));
});

test('좌표 저장 폴더 경로에 옛 폴더 이름이 박혀 있지 않다', () => {
  const rel = path.relative(repoRoot, COORDINATE_DIR);
  assert.ok(!rel.includes('MarkdownEditor'));
});
