function solution(n) {

    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let num = 1;
    let row = -1, col = 0; 
    let direction = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (direction === 0) {
                row++; 
            } else if (direction === 1) {
                col++; 
            } else {
                row--; 
                col--;
            }
            triangle[row][col] = num++;
        }
        direction = (direction + 1) % 3;
    }
    return triangle.flat();
}
