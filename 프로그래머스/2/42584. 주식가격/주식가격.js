function solution(prices) {
    const answer = Array(prices.length).fill(0); // 결과 배열 초기화
    const stack = []; // 스택 초기화

    for (let i = 0; i < prices.length; i++) {
        // 스택의 마지막 값과 현재 값을 비교
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop(); 
            answer[top] = i - top; // 시간 계산
        }
        stack.push(i);
    }

    // 스택에 남아있는 값 처리
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}
