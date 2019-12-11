// #1 Convert this javascript function to a curried function
export function curryMe(string1, string2, string3): string {
  return string1 + ' ' + string2 + ' ' + string3;
}
console.log(curryMe("One", "Two", "Three"));

// source code here
export const curryFunction = (string1: string) => (string2: string) => (string3: string) => {
  return [string1, string2, string3].join(' ');
}

console.log(curryFunction("One")("Two")("Three"));
// #2 Hoist and convert nested functions to curried functions
export function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

console.log(doMath(3)(4)(5));

// source code here
export const subtractFunction = (a: number) => (b: number) => {
  return a-b;
}

export const addFunction = (a: number) => (b:number) => {
  return a+b;
}

export const doMathFunction = (a: number) => (b:number) => (c:number) =>{
  return subtractFunction(addFunction(a)(b)) (c);
}

console.log(doMathFunction(3)(4)(5));
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
const ninjasOne = [
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

const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export const ninjaFunction = ( ninjasOne: Array<any> ) => ( ninjasTwo: Array<any> ) => ( belt: string ) => {
  let blackBelts = new Array<any>();
  const ninjasThree = [...ninjasOne, ...ninjasTwo];

  ninjasThree.forEach(ninja => {
    if(ninja.belt==belt){
      blackBelts.push(ninja);
    }
  })

  return blackBelts;
}
console.log(ninjaFunction(ninjasOne)(ninjasTwo)("green"));

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
export const addStatusFunction = ( ninjasOne: Array<any> ) => ( ninjasTwo: Array<any> ) => ( statusTypes: Array<any> ) => (gamerStatusTypes: Array <any> ) => {
  const whiteBelts = ninjaFunction(ninjasOne)(ninjasTwo)("white");
  const blackBelts = ninjaFunction(ninjasOne)(ninjasTwo)("black");
  const greenBelts = ninjaFunction(ninjasOne)(ninjasTwo)("green");



}
