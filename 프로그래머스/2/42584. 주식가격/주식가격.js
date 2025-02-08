function solution(prices) {
    let answer = Array.from({ length: prices.length }, (_, i) => prices.length - 1 - i);
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            let idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }

    return answer;
}
