function solution(book_time) {
    var answer = 0;
    let events = [];

    for (let [start, end] of book_time) {
        let [sh, sm] = start.split(":").map(Number);
        let [eh, em] = end.split(":").map(Number);

        let startTime = sh * 60 + sm;
        let endTime = eh * 60 + em + 10;

        events.push([startTime, 1]);
        events.push([endTime, -1]);  
    }
    events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let maxRooms = 0, currentRooms = 0;

    for (let [, type] of events) {
        currentRooms += type;
        maxRooms = Math.max(maxRooms, currentRooms);
    }
    return maxRooms;
}