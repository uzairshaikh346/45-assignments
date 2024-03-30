"use strict";
function show_magicians(array) {
    array.forEach(a => {
        console.log(a);
    });
}
let magicians = ["junaid bangali", "asim siraiki", "abulala", "pandit raamdev"];
// show_magicians(magicians)
// exercise 42
function make_great(magician) {
    magician.forEach(magician => {
        console.log(`The great ${magician}`);
    });
}
make_great(magicians);
