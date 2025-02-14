function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    let total = sum1 + sum2;

    if (total % 2 !== 0) return -1; // 합이 홀수면 나눌 수 없음

    let target = total / 2;
    let queue = [...queue1, ...queue2];
    let n = queue.length / 2;

    let left = 0, right = n, moves = 0;
    let visited = new Set();

    while (right < queue.length) {
        if (sum1 === target) return moves; 
        if (sum1 < target) {
            sum1 += queue[right]; 
            right++;
        } else {
            sum1 -= queue[left]; 
            left++;
        }

        moves++;

        let state = `${left},${right},${sum1}`;
        if (visited.has(state)) return -1;
        visited.add(state);
    }

    return -1;
}
