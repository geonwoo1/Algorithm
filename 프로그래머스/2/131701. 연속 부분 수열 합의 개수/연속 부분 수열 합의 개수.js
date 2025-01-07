function solution(elements) {
    let set = new Set();
    let n = elements.length;
    let circleElemets = elements.concat(elements);
    
    for(var i = 1; i <= n; i++){
        let sum = 0;
        for(var j = 0; j < n; j++){
            sum += circleElemets[i + j];
            set.add(sum);
        }
    }     
    
    return set.size;
}
