"use strict";
//Type aliases
//CANNOT DO THIS WITH INTERFACES. 
// literal types 
let myName;
// myName = 'Patel' // won't work this is bad.
let userName;
userName = 'John';
//functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello...');
logMsg('hello...');
// logMsg(add(2,3)); will log 5 but shows error too in editor
let subtract = function (c, d) {
    return c - d;
};
// interface MathFunction2 {
//     (a:number, b:number) : number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 4));
//optional parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters (cannot achieve with type aliases or interfaces.)
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 2, 3));
logMsg(addAll(2, 2));
logMsg(sumAll(2, 3));
//# sourceMappingURL=main.js.map