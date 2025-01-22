const fs = require('fs');
const path = require('path');

// 문제 파일이 저장된 디렉토리
const problemsDir = path.join(__dirname, '프로그래머스');

// README 파일 경로
const readmePath = path.join(__dirname, 'README.md');

// README 업데이트 함수
const updateReadme = () => {
    const difficultyCount = {
        'LEVEL 0': 0,
        'LEVEL 1': 0,
        'LEVEL 2': 0,
        'LEVEL 3': 0,
        'LEVEL 4': 0,
        'LEVEL 5': 0
    };

    const problemList = [];

    // 프로그래머스 디렉토리 내의 난이도 폴더를 읽기
    const difficultyFolders = fs.readdirSync(problemsDir);

    difficultyFolders.forEach(folder => {
        const folderPath = path.join(problemsDir, folder);
        
        // 폴더가 디렉토리인지 확인
        if (fs.statSync(folderPath).isDirectory()) {
            const problemFiles = fs.readdirSync(folderPath);
            
            problemFiles.forEach(file => {
                const problemName = file.replace('.js', '');
                problemList.push(`- [${problemName}](프로그래머스/${folder}/${file})`);

                // 난이도 추출 (폴더 이름에서 난이도를 확인)
                if (folder.includes('0')) {
                    difficultyCount['LEVEL 0']++;
                } else if (folder.includes('1')) {
                    difficultyCount['LEVEL 1']++;
                } else if (folder.includes('2')) {
                    difficultyCount['LEVEL 2']++;
                }else if (folder.includes('3')) {
                    difficultyCount['LEVEL 3']++;
                }else if (folder.includes('4')) {
                    difficultyCount['LEVEL 4']++;
                }else if (folder.includes('5')) {
                    difficultyCount['LEVEL 5']++;
                }
            });
        }
    });

    // 총 문제 개수 계산
    const totalProblems = problemList.length;

    // README 내용 구성
    const readmeContent = `
# 문제 목록

## 프로그래머스 문제
현재까지 풀어본 문제는 **${totalProblems}문제**입니다.
- LEVEL 0: ${difficultyCount['LEVEL 0']}문제
- LEVEL 1: ${difficultyCount['LEVEL 1']}문제
- LEVEL 2: ${difficultyCount['LEVEL 2']}문제
- LEVEL 3: ${difficultyCount['LEVEL 3']}문제
- LEVEL 4: ${difficultyCount['LEVEL 4']}문제
- LEVEL 5: ${difficultyCount['LEVEL 5']}문제


### 문제 목록:
${problemList.join('\n')}

---

이 리스트는 자동으로 업데이트됩니다. 마지막 업데이트: ${new Date().toLocaleString()}
    `;

    // README 파일에 내용 쓰기
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log('README.md 업데이트 완료');
};

// 함수 실행
updateReadme();
