"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
// Variable
const PI = 3.14;
exports.PI = PI;
// function
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandomNumber = generateRandomNumber;
