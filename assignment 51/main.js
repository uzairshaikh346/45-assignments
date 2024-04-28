"use strict";
function calculateArea(height, width) {
    return height * width;
}
// reflect function into arrow function
let CalculateArea = (height, width) => height * width;
console.log(CalculateArea(2, 3));
