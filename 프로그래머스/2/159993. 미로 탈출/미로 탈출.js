function solution(maps) {   
    let n = maps.length;
    let m = maps[0].length;
    const dx = [1, -1, 0, 0];  
    const dy = [0, 0, 1, -1];  
    
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            if(maps[i][j] == "S") var start = [i,j];
            else if(maps[i][j] =="L") var laver = [i,j];
            else if(maps[i][j] =="E") var exit = [i,j];   
        }
    }
    
    function bfs(start, end){
        const [startX, startY] = start;
        const [endX, endY] = end;
        let visited = Array.from({length :n}, () => Array(m).fill(false));
        visited[startX][startY] = true;
        let que =[[startX, startY, 0]];
        
        while(que.length > 0){
            let [x, y, dist] = que.shift();
            if(x == endX && y == endY) return dist;
            
            for(var i=0; i<4; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] != "X" && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    que.push([nx, ny, dist+1]);
                }
            }
        }
        return -1;
    }   
    
    let disLaver = bfs(start, laver);
    if(disLaver == -1) return -1;
    let disExit = bfs(laver, exit);
    if(disExit == -1) return -1;
    
    return disLaver + disExit;
}
    
    
    
    
    
    
    
    