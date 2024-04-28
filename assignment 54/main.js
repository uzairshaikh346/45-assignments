"use strict";
function objectwithdynamickey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = objectwithdynamickey(5, 6);
console.log(userPreference);
