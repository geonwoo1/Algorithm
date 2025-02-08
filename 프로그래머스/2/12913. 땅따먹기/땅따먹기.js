function solution(land) {
    let n = land.length;
    let dp = [...land[0]]; // 첫 번째 행 초기화

    for (let i = 1; i < n; i++) {
        let prev_dp = [...dp]; // 이전 dp 값을 저장 (기존 값 유지)
        
        dp[0] = land[i][0] + Math.max(prev_dp[1], prev_dp[2], prev_dp[3]);
        dp[1] = land[i][1] + Math.max(prev_dp[0], prev_dp[2], prev_dp[3]);
        dp[2] = land[i][2] + Math.max(prev_dp[0], prev_dp[1], prev_dp[3]);
        dp[3] = land[i][3] + Math.max(prev_dp[0], prev_dp[1], prev_dp[2]);
    }

    return Math.max(...dp);
}
