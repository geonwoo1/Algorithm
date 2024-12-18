function solution(s) {
    var answer = [];
    var st = s.split(" ");
    for(var i=0; i<st.length; i++){
        var upper = st[i].split("");
        for(var j=0; j<st[i].length; j++){
            if(j == 0){
            upper[j] = upper[j].toUpperCase();
            }else{
            upper[j] = upper[j].toLowerCase(); 
            }
    }
        answer.push(upper.join(""));
    }
    return answer.join(" ");
}