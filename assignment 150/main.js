"use strict";
console.log("before");
for (let i = 0; i < 1e9; i++) { }
console.log("after");
console.log("before asynchronous");
setTimeout(() => {
    console.log("asynchronous operation");
}, 2000);
console.log("after asynchronous");
