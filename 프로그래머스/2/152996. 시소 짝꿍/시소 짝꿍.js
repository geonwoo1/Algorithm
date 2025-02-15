function solution(weights) {
    let answer = 0;
    const count = new Map();
    const ratios = [2 / 3, 2 / 4, 3 / 4]; 
    for (const w of weights) {
        count.set(w, (count.get(w) || 0) + 1);
    }
    
    for (const [weight, cnt] of count.entries()) {
        if (cnt > 1) {
            answer += (cnt * (cnt - 1)) / 2;
        }

        for (const ratio of ratios) {
            const targetWeight = weight * ratio;
            if (count.has(targetWeight)) {
                answer += cnt * count.get(targetWeight);
            }
        }
    }

    return answer;
}