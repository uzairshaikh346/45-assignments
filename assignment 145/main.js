"use strict";
function executecallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
executecallback(add, 2, 5);
