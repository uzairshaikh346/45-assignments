"use strict";
let cricketer = {
    name: "babar azam",
    age: 28,
    type: "batsman"
};
let jsonstring = JSON.stringify(cricketer, null, 2);
console.log(jsonstring);
