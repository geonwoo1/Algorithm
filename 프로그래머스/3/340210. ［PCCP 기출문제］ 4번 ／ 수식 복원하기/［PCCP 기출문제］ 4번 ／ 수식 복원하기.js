function solution(expressions) {
    var answer = [];
    let maxNum = 0;
    let arr = [];
    let possible = [];
    let impossible = new Set();
    
    for(var i of expressions){
        const [num1, oper, num2, equals, result] = i.split(' ');
        if(result != 'X'){
            digits = [...num1.toString(), ...num2.toString(), ...result.toString()];
            maxDigit = Math.max(...digits.map(Number));
            maxNum = Math.max(maxNum, maxDigit);
        }else{
            answer.push(i);
            digits = [...num1.toString(), ...num2.toString()];
            maxDigit = Math.max(...digits.map(Number));
            maxNum = Math.max(maxNum, maxDigit);
        }
    }
    // 해당 진수를 계산해서 정답인 진수 찾기
    for(var i = maxNum+1; i < 10; i++){
        possible.push(i);
        for(var j of expressions){
            const [num1, oper, num2, equals, result] = j.split(' ');
            if(result != 'X'){
                let a = parseInt(num1, i);
                let b = parseInt(num2, i);
                let r = parseInt(result, i);
                let calcResult = oper === '+' ? a + b : a - b;
                if(calcResult !== r){
                    impossible.add(i);
                }
            }
        }
    }
    possible = possible.filter(item => !impossible.has(item))
    for(var i = 0; i < answer.length; i++){
        let [num1, oper, num2, equals, result] = answer[i].split(' ');
        if(possible.length == 1){
            let a = parseInt(num1, possible[0]);
            let b = parseInt(num2, possible[0]);
            result = oper == '+' ?  (a+b).toString(possible[0]) : (a-b).toString(possible[0]);
            answer[i] = [num1, oper, num2, equals, result].join(' ');
        }else{
            let minBaseA = parseInt(num1, possible[0]);
            let minBaseB = parseInt(num2, possible[0]);
            let maxBaseA = parseInt(num1, possible[possible.length - 1]);
            let maxBaseB = parseInt(num2, possible[possible.length - 1]);
            if(oper == '+'){
                result = (minBaseA+minBaseB).toString(possible[0]) == (maxBaseA+maxBaseB).toString(possible[possible.length - 1]) ? 
                     (minBaseA+minBaseB).toString(possible[0]) : "?"
            }else{
                result = (minBaseA-minBaseB).toString(possible[0]) == (maxBaseA-maxBaseB).toString(possible[possible.length - 1]) ? 
                     (minBaseA-minBaseB).toString(possible[0]) : "?"
            }
            answer[i] = [num1, oper, num2, equals, result].join(' ');
        }

    }
    console.log(possible)
    return answer
}