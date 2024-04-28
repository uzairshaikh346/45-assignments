"use strict";
function dayUntilNewYear() {
    let today = new Date;
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let diff = today.getTime() - newYear.getTime();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(dayUntilNewYear());
