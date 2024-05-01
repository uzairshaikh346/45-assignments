"use strict";
function morningmsg() {
    let date = new Date;
    let hour = date.getHours();
    if (hour <= 12) {
        console.log("Good Morning");
    }
    else {
        console.log("Good night");
    }
}
morningmsg();
let date = new Date;
let hour = date.getHours();
console.log(hour);
