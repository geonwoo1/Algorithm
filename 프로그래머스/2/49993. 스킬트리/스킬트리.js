function solution(skill, skill_trees) {
    var answer = 0;
    let que = [];
    for(var i of skill) que.push(i);
    
    for(var i of skill_trees){
        let config = true
        let dque = [...que];
        for(var j of i){
            if(dque.includes(j)){
                if(dque.shift() !== j){
                    config = false
                    break
                } 
            }
        }
        if(config) answer+=1;
    }
    return answer;
}