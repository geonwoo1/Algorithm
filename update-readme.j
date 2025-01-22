const fs = require('fs');
const path = require('path');

const PROBLEM_DIR = './프로그래머스'; // 문제 파일이 저장된 폴더 경로
const README_FILE = './README.md';

function getProblemList() {
  const files = fs.readdirSync(PROBLEM_DIR);
  return files.map(file => {
    const [id, title] = file.split('_');
    const url = `https://programmers.co.kr/learn/courses/30/lessons/${id}`;
    return `- [${title.trim()}](${url})`;
  });
}

function updateReadme() {
  const problemList = getProblemList();
  const content = `
# Programmers 문제 풀이 기록

## 문제 목록
${problemList.join('\n')}
`;

  fs.writeFileSync(README_FILE, content.trim());
}

updateReadme();
