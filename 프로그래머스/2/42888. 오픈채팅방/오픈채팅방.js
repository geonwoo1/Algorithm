function solution(record) {
    let userId = {}; 
    let logs = [];   

    for (let entry of record) {
        let [type, id, nick] = entry.split(" ");

        if (type !== "Leave") userId[id] = nick; 

        if (type !== "Change") {
            logs.push({ uid: id, message: type === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다." });
        }
    }

    return logs.map(log => `${userId[log.uid]}${log.message}`);
}
