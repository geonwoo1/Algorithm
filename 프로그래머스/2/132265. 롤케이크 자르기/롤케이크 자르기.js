function solution(topping) {
    var answer = 0;
    let dic = {};
    let set = new Set();
    let cnt = 0;
    for (let i of topping) {
        if (dic[i]) dic[i]++;
        else {
            dic[i] = 1;
            cnt++;
        }
    }
    for (let i of topping) {
        dic[i]--;
        if (dic[i] === 0) cnt--;

        set.add(i); 
        if (set.size === cnt) answer++;
    }
    return answer;
}
