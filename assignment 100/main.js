"use strict";
function nextBirthday(day, month) {
    const today = new Date;
    const year = today.getFullYear();
    let Birthday = new Date(year, month - 1, day);
    if (Birthday < today) {
        Birthday.setFullYear(year + 1);
    }
    return Birthday;
}
let myBirthday = nextBirthday(17, 9);
console.log(myBirthday.toLocaleDateString());
;
