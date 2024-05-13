"use strict";
const hellopromise = new Promise((resolve) => {
    setTimeout(() => { resolve("Hello, World!"); }, 50000);
});
hellopromise.then((message) => console.log(message));
