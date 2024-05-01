"use strict";
function marksheet(mark) {
    if (mark >= 90) {
        console.log("Grade A+");
    }
    else if (mark >= 80) {
        console.log("Grade A");
    }
    else if (mark >= 70) {
        console.log("Grade B");
    }
    else if (mark >= 60) {
        console.log("Grade C");
    }
    else {
        console.log("Grade D");
    }
}
marksheet(99);
marksheet(82);
marksheet(73);
marksheet(60);
marksheet(47);
