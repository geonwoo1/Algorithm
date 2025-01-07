function solution(elements) {
    let set = new Set();
    let n = elements.length;
    let circleElemets = elements.concat(elements);
    
    for(var i = 1; i <= n; i++){
        for(var j = 0; j < n; j++){
            let sum = circleElemets.slice(j, j + i).reduce((a, b) => a + b, 0);
            set.add(sum);
        }
    }     
    
    return set.size;
}
