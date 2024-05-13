"use strict";
function traditionalfunc(a, b) {
    return a + b;
}
let arrowfunc = (a, b) => {
    return a + b;
};
console.log(traditionalfunc(4, 6));
console.log(arrowfunc(4, 16));
