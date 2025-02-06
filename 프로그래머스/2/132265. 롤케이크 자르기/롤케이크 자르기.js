function solution(topping) {
    var answer = 0;
    let cake = new Set();
    let cake2 = new Set([...topping]);
    let cnt = cake2.size;
    let dic = {};
    for(var i of topping){
        if(i in dic) dic[i]+=1
        else dic[i] = 1
    }
    for(var i of topping){
        dic[i]-=1;
        if(dic[i] == 0) cnt-=1;
        cake.add(i)
        if(cake.size == cnt) answer++
    }

    return answer;
}