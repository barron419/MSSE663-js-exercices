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
export const ninjasOne = [
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

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export const ninjaBeltFunction = ( ninjasOne: Array<any> ) => ( ninjasTwo: Array<any> ) => ( belt: string ) => {
  let belts = new Array<any>();
  const ninjasThree = [...ninjasOne, ...ninjasTwo];

  ninjasThree.forEach(ninja => {
    if(ninja.belt==belt){
      belts.push(ninja);
    }
  })

  return belts;
}
console.log(ninjaBeltFunction(ninjasOne)(ninjasTwo)("black"));

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

// Create new Array of ninjas that includes status.
// export const ninjaStatusFunction = (ninjas: Array<any>) => (stat: string) => {
//   let ninjaArray = new Array<any>();

//   ninjas.forEach(ninja => {
//   ninjaArray.push({name: ninja.name, belt: ninja.belt, status: stat});  
//   });

//   return ninjaArray;
// }

// Match Statuses from statusTypes to ninjas by belt and add to their.
export const ninjaMapFunction = (ninjas: Array<any>) => {
 
  ninjas.forEach(ninja => {
    if(ninja.belt == 'white') {
      ninja.status = statusTypes.white;
    }  
    else if(ninja.belt == 'green') {
      ninja.status = statusTypes.green;
    } 
    else if(ninja.belt == 'black') {
      ninja.status = statusTypes.black;
    } 
  })

  return ninjas;

  };

  console.log(ninjaMapFunction(ninjasOne));
