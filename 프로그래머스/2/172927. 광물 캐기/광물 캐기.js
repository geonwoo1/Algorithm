function solution(picks, minerals) {
    const fatigue = {
        diamond: [1, 1, 1],
        iron: [5, 1, 1],
        stone: [25, 5, 1]
    };
    
    const mineralMap = { "diamond": 0, "iron": 1, "stone": 2 };
    
    let chunks = [];
    let totalPicks = picks.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < minerals.length && chunks.length < totalPicks; i += 5) {
        let chunk = minerals.slice(i, i + 5);
        let fatigueScore = [0, 0, 0]; 
        
        chunk.forEach(min => {
            fatigueScore[0] += fatigue.diamond[mineralMap[min]];
            fatigueScore[1] += fatigue.iron[mineralMap[min]];
            fatigueScore[2] += fatigue.stone[mineralMap[min]];
        });

        chunks.push(fatigueScore);
    }
    
    chunks.sort((a, b) => b[2] - a[2]);

    let answer = 0;
    
    for (let chunk of chunks) {
        if (picks[0] > 0) {
            answer += chunk[0];
            picks[0]--;
        } else if (picks[1] > 0) {
            answer += chunk[1];
            picks[1]--;
        } else if (picks[2] > 0) {
            answer += chunk[2];
            picks[2]--;
        }
    }
    
    return answer;
}
