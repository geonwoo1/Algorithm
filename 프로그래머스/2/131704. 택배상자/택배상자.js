function solution(order) {
    var answer = 1;
    let max = []
    max[0] = order[0];
    let sub = Array.from({ length: order[0] -1 }, (_, i) => i + 1);
    for(var i = 1; i < order.length; i++){
        if(max[max.length -1] < order[i]){
            max.push(order[i])
            answer+=1
            for(var j = max[max.length - 2] +1; j < max[max.length -1]; j++){
                sub.push(j);
            }
        }else{
            if(sub.pop() == order[i]) answer+=1;
            else return answer
        }    
    }
    return answer;
}