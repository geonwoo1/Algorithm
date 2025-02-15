function solution(sequence, k) {
    let start = 0, end = 0;
    let sum = sequence[0];
    let n = sequence.length;
    let len = sequence.length;
    let answer = [];
    while(end < sequence.length){
        if(sum === k) { 
            if(end - start < len){
                len = end - start
                answer = [start, end];
            }
        }

        if(sum >= k){
            sum -= sequence[start];
            start++;
        } 
        else{
            end++;
            if (end < n) sum += sequence[end];
        }
    }
    return answer;
}