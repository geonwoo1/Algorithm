function solution(fees, records) {
    var answer = [];
    
    let [basicTime, basicFee, unitTime, unitFee] = fees
    let enter = {};
    let info = {};
    
    for(var i of records){
        let record = i.split(" ");
        let time = record[0];
        let carNumber = record[1];
        let his = record[2];
        
        if(his == "IN") enter[carNumber] = timeToMinute(time);
        else{
            info[carNumber] = (info[carNumber] ?? 0) + timeToMinute(time) - enter[carNumber]; 
            delete enter[carNumber];
        }    
    }
    
    for(let carNumber of Object.keys(enter)){
        let time = enter[carNumber];
        let t = 1439;
        info[carNumber] = (info[carNumber] ?? 0) + t - time;
    } 
    // 오름차순 정렬
    let infoKey = Object.keys(info).sort();   
    
    for(var i of infoKey){
        answer.push(calFee(info[i]))
    }
    function calFee(totalTime){
        if(totalTime <= basicTime) return basicFee;
        else{
            if((totalTime - basicTime) % unitTime != 0 ){
                return basicFee + unitFee + Math.floor((totalTime - basicTime) / unitTime) * unitFee 
            }
            return basicFee + (totalTime - basicTime) / unitTime * unitFee
        }
    }
    
    // 시각을 분으로 바꾸기
    function timeToMinute(time){
        let hour = parseInt(time.split(":")[0]);
        let minute  = parseInt(time.split(":")[1]);
        let totalMinute = hour * 60 + minute;
        return totalMinute;
    }
    
    return answer;
}