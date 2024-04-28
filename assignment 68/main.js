"use strict";
function roundNum(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(roundNum(0.2, 0.3));
