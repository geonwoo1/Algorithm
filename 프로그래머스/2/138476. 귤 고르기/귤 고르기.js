function solution(k, tangerine) {
    var answer = 0;
    let dic = {};
    
    tangerine.forEach((item)=> dic[item] = (dic[item] || 0) +1);
    
    let sortValue = Object.values(dic).sort((a, b) => b - a);
    let sum = 0;
    for(var i of sortValue){
        sum += i;
        answer++;
        if(sum >= k) return answer
    }
    
    return answer;
}