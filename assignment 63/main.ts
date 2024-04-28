type playerInfo = {
    kind? : "batsman" | "bowler";
    strikrate? : number;
    Pace? : number
}


let batsman: playerInfo = {
    kind: "batsman",
    strikrate: 45,
};
let bowler: playerInfo = {
    kind: "bowler",
    Pace: 150
};
console.log(batsman, bowler);
