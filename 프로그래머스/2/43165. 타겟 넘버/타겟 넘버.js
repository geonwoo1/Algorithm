function solution(numbers, target) {
    let cnt = 0;
    function bfs(idx, sum){
        if(idx == numbers.length){
            if(target == sum){
                cnt++;
            }
            return ;
        }
        bfs(idx+1, sum + numbers[idx]);
        bfs(idx+1, sum - numbers[idx]);
    }
    bfs(0,0);
    return cnt;
}

















