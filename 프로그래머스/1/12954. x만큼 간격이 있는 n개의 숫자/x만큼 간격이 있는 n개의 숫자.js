function solution(x, n) {
    var answer = [x];
    var x1 = x
    for(var i = 1; i<n; i++){
        x1 = x1+x;
        answer.push(x1)
    }
    return answer;
}