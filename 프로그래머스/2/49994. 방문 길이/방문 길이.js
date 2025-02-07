function solution(dirs) {
    let current = [0, 0];
    let dis = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        let x = current[0];
        let y = current[1];
        let nx = x, ny = y;

        if (dirs[i] === "U") ny++;
        else if (dirs[i] === "D") ny--;
        else if (dirs[i] === "R") nx++;
        else if (dirs[i] === "L") nx--;

        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
 
        dis.add(`${x},${y},${nx},${ny}`);
        dis.add(`${nx},${ny},${x},${y}`);

        current = [nx, ny]; 
    }

    return dis.size / 2; 
}
