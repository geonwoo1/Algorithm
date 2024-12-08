function solution(points, routes) {
    var answer = 0;
    let visited = new Map();
   
    for(var i = 0; i < routes.length; i++){
        let time = 0;
        for(var j = 0; j < routes[i].length -1; j++){
            const [start, end] = [routes[i][j], routes[i][j+1]];
            let [startX, startY] = points[start - 1];
            let [endX, endY] = points[end -1];
            let currentKey = `${startX}, ${startY}, ${time}`
            if(j==0){
                if(visited.has(currentKey)){
                    visited.set(currentKey, visited.get(currentKey) + 1)
                }else{
                visited.set(currentKey, 1)
                }
            }
            while(startX !== endX || startY !== endY){
                if(startX > endX){
                    startX--;
                }else if(startX < endX){
                    startX++;
                }else if(startY > endY){
                    startY--;
                }else if(startY < endY){
                    startY++;
                }
                time++;
                currentKey = `${startX}, ${startY}, ${time}`
                if(visited.has(currentKey)){
                    visited.set(currentKey, visited.get(currentKey) + 1)
                }else{
                    visited.set(currentKey, 1)
                }
        }
        }
    }
    for (let [key, value] of visited) {
    if(value >= 2){
        answer++;
        }
    }
    return answer;
} 