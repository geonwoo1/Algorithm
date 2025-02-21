function solution(board) {
    var answer = 0;
    let n = board.length;
    let m = board[0].length;
    let dx = [1, -1, 0, 0]; 
    let dy = [0, 0, 1, -1];
    let visited = Array.from({length : n}, ()=>Array(m).fill(false));
    let start;
    
    //시작지점 찾기
    for(var i = 0; i < n; i++){
        for(var j = 0; j<m; j++){
            if(board[i][j] == 'R'){
                start = [i,j];
                break;
            }
        }
    }
    
    let que = [[start[0], start[1], 0]];
    while(que.length > 0){
        let [x,y,cnt] = que.shift();
        if(board[x][y] == 'G') return cnt;
        visited[x][y] = true;
        for(var i=0; i<4; i++){
            let nx = x;
            let ny = y;
            while(nx +dx[i] >= 0 && ny+dy[i] >= 0 && nx+dx[i] < n && ny+dy[i] < m && board[nx+dx[i]][ny+dy[i]] !=='D'){
                nx+=dx[i];
                ny+=dy[i];
            }
            if(!visited[nx][ny]){
                visited[nx][ny] = true;
                que.push([nx,ny,cnt+1]);
            }
        }
        
    }
    
    
    
    return -1;
}