"use strict";
function checkBothTrue(ans1, ans2) {
    return ans1 && ans2;
}
let ans1 = 2 > 1;
let ans2 = 3 > 4;
let check = checkBothTrue(ans1, ans2);
console.log(check);
