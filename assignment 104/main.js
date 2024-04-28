"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ColorCode() {
    let code = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return code;
}
console.log(ColorCode());
