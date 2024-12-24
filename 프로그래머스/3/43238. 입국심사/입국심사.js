function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=>a-b);
    let start = 1;
    let end = n * times[times.length-1]; // 최대시간 설정
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        let sum = times.reduce((a,b)=> a+(Math.floor(mid/b)), 0);
        if(sum >= n){
            answer = mid;
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    
    return start;
}