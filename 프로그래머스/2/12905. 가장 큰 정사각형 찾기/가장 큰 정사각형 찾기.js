function solution(board) {
    let maxSize = 0;
    let rows = board.length;
    let cols = board[0].length;
    if(rows == 1 && cols == 1) return board[0][0] == 1 ? 1 : 0 
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
                maxSize = Math.max(maxSize, board[i][j]);
            }
        }
    }

    return maxSize ** 2; 
}
