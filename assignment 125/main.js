"use strict";
const obj = {
    width: 5,
    height: 4,
    getsize: function () {
        return this.width * this.height;
    }
};
console.log(obj.getsize());
