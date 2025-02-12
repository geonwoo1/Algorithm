function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [1, -1, 0, 0]; 
    const dy = [0, 0, 1, -1];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    function bfs(startX, startY){
        const queue = [[startX, startY]];
        visited[startX][startY] = true;
        let totalFood = parseInt(maps[startX][startY]);
        
        while(queue.length > 0){
            const [x,y] = queue.shift();
            for(var i = 0; i < 4; i++){
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(nx >= 0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && maps[nx][ny] !=='X'){
                    visited[nx][ny] = true
                    totalFood += parseInt(maps[nx][ny]);
                    queue.push([nx, ny]);
                }
            }
        }
        return totalFood;
    }
    const answer = [];
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                answer.push(bfs(i, j)); 
            }
        }
    }
    return answer.length == 0 ? [-1] : answer.sort((a,b)=> a-b)
}
