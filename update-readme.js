const fs = require('fs');
const path = require('path');

// 문제 파일이 저장된 디렉토리
const problemsDir = path.join(__dirname, '프로그래머스');

// README 파일 경로
const readmePath = path.join(__dirname, 'README.md');

// README 업데이트 함수
const updateReadme = () => {
    const problemFiles = fs.readdirSync(problemsDir);
    const problemList = problemFiles.map(file => `- [${file.replace('.js', '')}](프로그래머스/${file})`);
    const readmeContent = `# 문제 목록\n\n## 프로그래머스 문제\n\n${problemList.join('\n')}`;
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log('README.md 업데이트 완료');
};

// 함수 실행
updateReadme();
