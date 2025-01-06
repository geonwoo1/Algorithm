function solution(n, words) {
    let dic = new Set(); 
    dic.add(words[0]); 
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const previousWord = words[i - 1];
        
       
        if (dic.has(currentWord) || currentWord[0] !== previousWord[previousWord.length - 1]) {
            const player = (i % n) + 1; 
            const turn = Math.floor(i / n) + 1; 
            return [player, turn];
        }
        dic.add(currentWord); 
    }
    return [0, 0]; 
}
