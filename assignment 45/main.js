"use strict";
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createcar("honda", "civic", { color: "black", year: 2023 });
console.log(mycar);
