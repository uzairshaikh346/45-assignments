"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logObjectProperties(obj) {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
