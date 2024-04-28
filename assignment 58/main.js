"use strict";
function averageScore(...scores) {
    let total = scores.reduce((total, current) => total + current, 0);
    return total / scores.length;
}
;
let average = averageScore(43, 56, 32, 48, 96);
console.log(average);
