function solution(s) {
    var answer = [];
    s = s.replace(/{{|}}/g, '').split('},{');
    let arr = s.map(i => i.split(',').map(Number));
    let dic = {};
    for(var i of arr){
        for(var j of i){
            if(j in dic) dic[j]+=1;
            else dic[j] = 1
        }
    }
    var answer = Object.keys(dic)
      .sort((a, b) => dic[b] - dic[a])
      .map(Number);
    
//     let arr = s.map(group => group.split(',').map(Number));
//     arr.sort((a, b) => a.length - b.length);
    
//     arr.forEach(group => {
//         group.forEach(num => {
//             if (!answer.includes(num)) {
//                 answer.push(num);
//             }
//         });
//     });
    
    return answer;
}
