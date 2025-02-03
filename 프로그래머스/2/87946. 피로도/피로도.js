function solution(k, dungeons) {

    let dungeonsCnt = 0;
    let visited = Array(dungeons.length).fill(false);
    
    function dfs(current, cnt){
        dungeonsCnt = Math.max(dungeonsCnt, cnt);
        for(var i = 0; i < dungeons.length; i++){
            const [min, cost] = dungeons[i];
            if (visited[i]) continue;
            
            if(current >= min){
                visited[i] = true;
                dfs(current - cost, cnt+1, visited);
                visited[i] = false;
            }
        }
        
    }
    
    dfs(k, 0);
    
    return dungeonsCnt
    
      
    
}
