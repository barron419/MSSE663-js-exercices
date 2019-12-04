"use strict";
var _a;
exports.__esModule = true;
// #1 Variable swapping
exports.fruits = ['apple', 'banana'];
// Currently, I would get the following returns:
console.log(exports.fruits[0]); // 'apple'  -- Adjusted to output apple
console.log(exports.fruits[1]); // 'banana' -- Adjusted to output banana
// deconstruct here
exports.b = exports.fruits[0], exports.a = exports.fruits[1];
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(exports.a); // 'banana'  
console.log(exports.b); // 'apple' 
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
// deconstruct here
exports.c = exports.food[0], exports.d = exports.food[1], exports.others = exports.food.slice(2);
console.log(exports.c); // 'apple'  -- Adjusted to not redefine a
console.log(exports.d); // 'banana' -- Adjusted to not redefine b
console.log(exports.others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
exports.hello = (_a = ['hello', 'taylor'], _a[0]), exports.taylor = _a[1];
exports.statement = [exports.hello, exports.taylor].join(",") + "!";
// 'hello, taylor!'
console.log(exports.statement);
