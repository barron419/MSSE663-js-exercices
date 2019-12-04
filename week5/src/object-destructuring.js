"use strict";
exports.__esModule = true;
// #1 Object Destructuring
exports.object = { name: 'elvis', title: 'hip swinger' };
// deconstruct here
exports.person = exports.object.name, exports.job = exports.object.title;
console.log(exports.person); // 'elvis'
console.log(exports.job); // 'hip swinger'
// #2 Object Matching: Nested destructuring
exports.nestedObject = {
    user: 'elvis',
    address: {
        city: 'denver',
        state: 'colorado'
    },
    id: 1
};
// deconstruct here
exports.user = exports.nestedObject.user, exports.address = exports.nestedObject.address, exports.id = exports.nestedObject.id;
console.log(exports.user); // 'elvis'
console.log(exports.address); // { city: 'denver', state: 'colorado' }
console.log(exports.id); // 1
// #4 Create a new object given the destrutured values above
// reconstruct here
exports.newObject = { user: exports.user, address: exports.address, id: exports.id };
console.log(exports.newObject);
// #3 Object with key value pairs: construct a statement
var _a = { greeting: 'hello', name: 'taylor' }, greeting = _a.greeting, name = _a.name;
exports.newStatement = (greeting + ", " + name + "!");
console.log(exports.newStatement);
// 'hello, taylor!'
