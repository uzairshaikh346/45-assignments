"use strict";
function addToArry(num) {
    return num.reduce((curr, total) => curr + total);
}
let add = [2, 3, 4, 5];
console.log(addToArry(add));
