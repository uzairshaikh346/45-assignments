"use strict";
let AgeStages = function (num) {
    if (num <= 13) {
        console.log("Children");
    }
    else if (num <= 20 && num >= 13) {
        console.log("Teenager");
    }
    else if (num <= 35 && num >= 20) {
        console.log("Adult");
    }
    else if (num >= 35) {
        console.log("Older");
    }
};
AgeStages(9);
AgeStages(17);
AgeStages(32);
AgeStages(40);
