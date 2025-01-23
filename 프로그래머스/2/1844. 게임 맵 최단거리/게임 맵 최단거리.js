function solution(maps) {
    var answer = 0;
    var n = maps.length;
    var m = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;
    let que = [[0,0,1]]
    
    while(que.length > 0){
        let [x,y,dis] = que.shift();
        if (x === n - 1 && y === m - 1) {
            return dis;
        }
        for(var i = 0; i < 4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] === 1) {
                visited[nx][ny] = true; 
                que.push([nx, ny, dis + 1]); 
            }
        }
    }
    return -1;
}