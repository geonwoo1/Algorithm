function solution(n, works) {
    var answer = 0;
    
    var sum = works.reduce((sum, current)=>(sum+current));
    works.sort((a,b) => b-a);
    if(sum <= n ) return 0;

    while(n > 0){
        let maxNum = works[0]
        for(var i = 0; i < works.length; i++){
            if(works[i] >= maxNum){
                works[i]--;
                n--; 
            }
            if(n == 0) break;
        }
    }
 
    return works.reduce((sum, current) => sum + current*current,0);
}