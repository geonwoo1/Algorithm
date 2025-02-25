function solution(places) {
    const dx = [-1, 1, 0, 0]; 
    const dy = [0, 0, -1, 1];

    function isSafe(place, x, y) {
        let queue = [[x, y, 0]]; 
        let visited = Array.from({ length: 5 }, () => Array(5).fill(false));
        visited[x][y] = true;

        while (queue.length) {
            let [cx, cy, dist] = queue.shift();

            if (dist > 2) continue; 

            if (dist > 0 && place[cx][cy] === 'P') return false; 

            for (let i = 0; i < 4; i++) {
                let nx = cx + dx[i];
                let ny = cy + dy[i];

                if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && !visited[nx][ny]) {
                    if (place[nx][ny] !== 'X') { 
                        visited[nx][ny] = true;
                        queue.push([nx, ny, dist + 1]);
                    }
                }
            }
        }

        return true;
    }

    let answer = [];

    for (let place of places) {
        let isValid = true;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (place[i][j] === 'P') {
                    if (!isSafe(place, i, j)) {
                        isValid = false;
                        break;
                    }
                }
            }
            if (!isValid) break;
        }

        answer.push(isValid ? 1 : 0);
    }

    return answer;
}
