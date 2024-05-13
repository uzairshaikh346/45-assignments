"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    value: "traditionalVSArrow",
    traditionalfunction: function () {
        console.log("inTraditionalfunction :", this.value);
    },
    arrowfunc: () => {
        console.log("inArrowFunction", this.value);
    },
};
console.log(obj.traditionalfunction);
console.log(obj.arrowfunc);
