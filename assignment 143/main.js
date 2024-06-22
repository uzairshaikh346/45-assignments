"use strict";
const conditionalpromise = new Promise((resolve, reject) => {
    let success = Math.random() < 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalpromise
    .then((result) => console.log(result))
    .catch((reject) => console.log(reject));
