"use strict";
function CheckSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log("winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Spring");
            break;
        case 7:
        case 8:
        case 9:
            console.log("summer");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Fall");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}
CheckSeason(2);
CheckSeason(6);
CheckSeason(8);
CheckSeason(11);
