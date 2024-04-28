"use strict";
let laptop = {
    make: "dell",
    model: "i5",
    year: "2015",
    describe: function () {
        console.log(`This laptop is ${this.make} ${this.model} ${this.year}`);
    }
};
laptop.describe();
