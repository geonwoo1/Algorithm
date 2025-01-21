function solution(k, dungeons) {
    let maxDungeons = 0;  // 최대 탐험할 수 있는 던전 수

    // DFS (깊이 우선 탐색)을 사용하여 모든 던전 탐험 순서를 탐색
    function dfs(currentFatigue, exploredCount, visited) {
        // 현재까지 탐험한 던전 수가 최대치라면 업데이트
        maxDungeons = Math.max(maxDungeons, exploredCount);

        // 모든 던전을 탐험할 수 있는 경우 탐색
        for (let i = 0; i < dungeons.length; i++) {
            const [minRequired, fatigueCost] = dungeons[i];

            // 이미 방문한 던전은 건너뜁니다
            if (visited[i]) continue;

            // 현재 피로도가 최소 필요 피로도보다 크거나 같을 때만 던전 탐험 가능
            if (currentFatigue >= minRequired) {
                visited[i] = true;  // 던전 탐험 표시
                dfs(currentFatigue - fatigueCost, exploredCount + 1, visited);  // 탐험 후 남은 피로도와 던전 탐험 수 업데이트
                visited[i] = false;  // 탐험 취소 (다른 경로 탐색 위해)
            }
        }
    }

    // 방문 여부를 저장할 배열을 초기화하고 DFS 탐색 시작
    dfs(k, 0, Array(dungeons.length).fill(false));

    return maxDungeons;
}
