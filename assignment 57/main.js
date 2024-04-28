"use strict";
let numbersArray = [43, 56, 35, 87, 59, 47, 28, 15, 37];
let averageNumber = numbersArray.reduce((total, current) => total + current / numbersArray.length);
console.log(averageNumber);
