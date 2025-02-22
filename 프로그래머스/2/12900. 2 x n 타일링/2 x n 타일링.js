function solution(n) {
    const MOD = 1000000007;
    const dp = new Array(n + 1).fill(0);
 
    // 초기 조건
    dp[1] = 1;
    dp[2] = 2;

    // dp[n]을 계산
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }

    return dp[n];
}
