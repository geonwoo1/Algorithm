const fs = require('fs');
const path = require('path');

// 문제 파일이 저장된 디렉토리
const problemsDir = path.join(__dirname, '프로그래머스');

// README 파일 경로
const readmePath = path.join(__dirname, 'README.md');

// 문제 개수 제한 (상위 N개만 표시)
const MAX_PROBLEMS_TO_SHOW = 10;

// README 업데이트 함수
const updateReadme = () => {
    const problemFiles = fs.readdirSync(problemsDir);
    const problemList = problemFiles.map(file => `- [${file.replace('.js', '')}](프로그래머스/${file})`);
    
    // 문제 개수 계산
    const problemCount = problemList.length;
    
    // 상위 N개 문제만 표시
    const displayedProblems = problemList.slice(0, MAX_PROBLEMS_TO_SHOW);
    
    // "더 보기" 링크 추가
    const moreLink = problemCount > MAX_PROBLEMS_TO_SHOW ? `\n\n[더 보기](${readmePath})` : '';
    
    // README 내용 구성
    const readmeContent = `
# 문제 목록

## 프로그래머스 문제
현재까지 풀어본 문제는 **${problemCount}문제**입니다.

### 문제 목록:
${displayedProblems.join('\n')}

${moreLink}

---

이 리스트는 자동으로 업데이트됩니다.
    `;

    // README 파일에 내용 쓰기
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log('README.md 업데이트 완료');
};

// 함수 실행
updateReadme();
