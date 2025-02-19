function solution(maps) {
    var answer = [];
    let n = maps.length;
    let m = maps[0].length;
    let dx = [1,0,-1,0];
    let dy = [0,1,0,-1];
    let visited = Array.from({length : n},()=>Array(m).fill(false));
    
    function bfs(startX, startY){
        let que = [[startX, startY]];
        visited[startX][startY] = true;
        let cnt = Number(maps[startX][startY]);
        while(que.length > 0){
            let [x,y]= que.shift();
            for(var i =0; i<4; i++){
                let nx = x+dx[i];
                let ny = y+dy[i];
                if(nx>=0 && ny>=0 &&nx<n &&ny<m &&!visited[nx][ny] && maps[nx][ny] !=='X'){
                    visited[nx][ny] = true;
                    que.push([nx,ny]);
                    cnt+= Number(maps[nx][ny]);
                }
            }
            
        }
        return cnt;
    }
    for(var i = 0; i<n; i++){
        for(var j=0; j<m; j++){
            if(maps[i][j] !='X' && !visited[i][j]){
    
                answer.push(bfs(i,j));
            }
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}