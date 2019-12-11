"use strict";
exports.__esModule = true;
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
exports.things = ['thing1', 'thing2'];
exports.thing2 = exports.things.map(function (n) { return ({ name: n }); });
console.log(exports.thing2);
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */
