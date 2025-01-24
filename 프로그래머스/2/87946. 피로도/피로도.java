class Solution {
    private int maxDungeons = 0;

    public int solution(int k, int[][] dungeons) {
        boolean[] visited = new boolean[dungeons.length];
        exploreDungeons(k, dungeons, visited, 0);
        return maxDungeons;
    }

    private void exploreDungeons(int k, int[][] dungeons, boolean[] visited, int count) {
        // 최대 탐험한 던전 수 갱신
        maxDungeons = Math.max(maxDungeons, count);

        for (int i = 0; i < dungeons.length; i++) {
            int required = dungeons[i][0];
            int cost = dungeons[i][1];
            
            // 이미 방문한 던전이 아니고, 현재 피로도가 최소 필요 피로도 이상인 경우
            if (!visited[i] && k >= required) {
                visited[i] = true; // 던전 방문 처리
                exploreDungeons(k - cost, dungeons, visited, count + 1); // 피로도 감소 후 재귀 호출
                visited[i] = false; // 백트래킹으로 던전 미방문 처리
            }
        }
    }
}
