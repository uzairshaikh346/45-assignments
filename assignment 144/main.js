"use strict";
const promise1 = Promise.resolve(3);
const promise2 = 32;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 4);
});
Promise.all([promise1, promise2, promise3]).then((resolve) => {
    console.log(resolve);
});
