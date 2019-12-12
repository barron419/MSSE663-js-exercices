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

export const things = ['thing1', 'thing2'];

console.log(mapThings(things));

export function mapThings(map: Array<any>) {
    let mapped = new Array<any>();

    mapped = map.map(n => ({id: map.indexOf(n) ,name: n}));
    
    return mapped;
}



/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */

console.log(filterThings('1', mapThings(things)));

 export function filterThings(key: string, toBeFiltered: Array<any>) {
    let filtered = new Array<any>();
    let key2 = parseInt(key, 10);

    filtered = toBeFiltered.filter(function(thing){
        return toBeFiltered.indexOf(thing) == key2;      
    });
    return filtered;
}

 