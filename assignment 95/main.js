"use strict";
function greater10(num) {
    return num.filter(num => num > 10);
}
let numbers = [6, 3, 1, 14, 2, 35, 8, 13];
console.log(greater10(numbers));
