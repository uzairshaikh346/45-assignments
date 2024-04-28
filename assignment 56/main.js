"use strict";
let mixedArray = [1, "uzair", true, 6, "umair", 5, false, " faaiz", 5];
let onlyWords = mixedArray.filter(item => typeof item === "string");
console.log(onlyWords);
