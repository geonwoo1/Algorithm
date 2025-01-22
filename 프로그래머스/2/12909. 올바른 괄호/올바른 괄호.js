function solution(s){
    var answer = true;
    var stack = [];
    var map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(var i of s){
        if(map[i]){
            stack.push(i)
        }else{
            if(stack.length == 0) return false;
            if(i != map[stack.pop()]) return false;
        }
    }
    return stack.length !==0 ? false :true;
}