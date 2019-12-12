"use strict";
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
exports.__esModule = true;
exports.things = ['thing1', 'thing2'];
console.log(mapThings(exports.things));
function mapThings(map) {
    var mapped = new Array();
    mapped = map.map(function (n) { return ({ id: map.indexOf(n), name: n }); });
    return mapped;
}
exports.mapThings = mapThings;
;
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */
console.log(filterThings('1', mapThings(exports.things)));
function filterThings(key, toBeFiltered) {
    var filtered = new Array();
    var key2 = parseInt(key, 10);
    filtered = toBeFiltered.filter(function (thing) {
        return toBeFiltered.indexOf(thing) == key2;
    });
    return filtered;
}
exports.filterThings = filterThings;
;
