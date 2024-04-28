"use strict";
function makeAdd(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addNine = makeAdd(9);
console.log(addNine(5));
