function solution(priorities, location) {
    var answer = 0;
    let que = priorities.map((priority, index) => [priority, index]);
 
    while (que.length > 0) {
        let [pri, idx] = que.shift();
        if (que.some(([currentPri]) => pri < currentPri)) {
            que.push([pri, idx]);
        } else {
            answer++;
            if (idx === location) {
                return answer;
            }
        }
    }
}
