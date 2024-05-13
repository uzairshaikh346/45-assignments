"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}
exports.person = person;
