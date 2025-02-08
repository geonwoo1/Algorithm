function solution(order) {
    let answer = 0;
    let stack = [];
    let sub = [];
    let current = 1; 

    for (let box of order) {
        while (current <= box) {
            stack.push(current++); 
        }

        if (stack[stack.length - 1] === box) {
            stack.pop();
            answer++;
        } else {
            break; 
        }
    }
    
    return answer;
}
