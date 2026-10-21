// Copyright (c) dendr000. MIT License.
// tests/repo-rules.test.js v1.0
/*
 * 파일 위치: tests/repo-rules.test.js
 * 기능 요약: 저장소 규칙(코드 파일 저작권 한 줄, 내 PC 절대 경로 금지, 비밀 파일 제외)이 지켜지는지 확인합니다.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARK = 'Copyright (c) dendr000. MIT License.';
const CODE_EXT = ['.js', '.jsx', '.css', '.html', '.bat'];

// 추적 중이거나 새로 만든(무시 대상 제외) 파일 목록. 지워진 파일은 뺀다.
const files = execFileSync('git', ['ls-files', '-co', '--exclude-standard'], { cwd: repoRoot, encoding: 'utf8' })
  .split('\n')
  .map((s) => s.trim())
  .filter((s) => s && fs.existsSync(path.join(repoRoot, s)));

const codeFiles = files.filter((f) => CODE_EXT.includes(path.extname(f).toLowerCase()));
const read = (rel) => fs.readFileSync(path.join(repoRoot, rel), 'utf8');

test('모든 코드 파일 앞부분에 저작권 한 줄이 있다', () => {
  const missing = codeFiles.filter((f) => !read(f).slice(0, 400).includes(MARK));
  assert.deepEqual(missing, []);
});

test('코드 파일에 내 PC 절대 경로(C:\\dev)가 박혀 있지 않다', () => {
  const bad = codeFiles.filter((f) => /C:[\\/]+dev[\\/]/i.test(read(f)));
  assert.deepEqual(bad, []);
});

test('비밀 파일(.env, 키, 인증서)이 저장소에 들어 있지 않다', () => {
  const bad = files.filter((f) => /(^|\/)\.env($|\.)(?!example$)|\.(pem|key|pfx)$/i.test(f));
  assert.deepEqual(bad, []);
});
