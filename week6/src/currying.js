"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// #1 Convert this javascript function to a curried function
function curryMe(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}
exports.curryMe = curryMe;
console.log(curryMe("One", "Two", "Three"));
// source code here
exports.curryFunction = function (string1) { return function (string2) { return function (string3) {
    return [string1, string2, string3].join(' ');
}; }; };
console.log(exports.curryFunction("One")("Two")("Three"));
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}
exports.doMath = doMath;
console.log(doMath(3)(4)(5));
// source code here
exports.subtractFunction = function (a) { return function (b) {
    return a - b;
}; };
exports.addFunction = function (a) { return function (b) {
    return a + b;
}; };
exports.doMathFunction = function (a) { return function (b) { return function (c) {
    return exports.subtractFunction(exports.addFunction(a)(b))(c);
}; }; };
console.log(exports.doMathFunction(3)(4)(5));
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
var ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];
var ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
// source code here
exports.ninjaFunction = function (ninjasOne) { return function (ninjasTwo) { return function (belt) {
    var blackBelts = new Array();
    var ninjasThree = __spreadArrays(ninjasOne, ninjasTwo);
    ninjasThree.forEach(function (ninja) {
        if (ninja.belt == belt) {
            blackBelts.push(ninja);
        }
    });
    return blackBelts;
}; }; };
console.log(exports.ninjaFunction(ninjasOne)(ninjasTwo)("green"));
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */
exports.statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};
exports.gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};
// source code here
exports.addStatusFunction = function (ninjasOne) { return function (ninjasTwo) { return function (statusTypes) { return function (gamerStatusTypes) {
    var whiteBelts = exports.ninjaFunction(ninjasOne)(ninjasTwo)("white");
    var blackBelts = exports.ninjaFunction(ninjasOne)(ninjasTwo)("black");
    var greenBelts = exports.ninjaFunction(ninjasOne)(ninjasTwo)("green");
    var whiteBeltStatus = whiteBelts.map(function (status) { return ({ "status:grasshopper":  }); });
}; }; }; };