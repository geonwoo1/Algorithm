function solution(n, stations, w) {
    var answer = 0;
    var startIndex = 0;
    for(var i = 0 ; i<stations.length ; i++){
        var toReachIndex = stations[i] - w - 1;
        answer += Math.ceil((toReachIndex - startIndex) / ((2 * w) + 1));
        startIndex = stations[i] + w;
    }
    answer += Math.ceil((n - startIndex) / ((2 * w) + 1));  
    return answer;
}
