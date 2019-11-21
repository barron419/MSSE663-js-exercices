/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
*/
 var monkey = {
     name: 'George',
     age: 35,
     gender: 'Male',
     catchphrase: 'Hello World',
     bio: function() {
         return this.name + " is a " + this.age + " year old " + this.gender + " monkey.";
        },
     intro: function() {
         return "Hello, my name is " + this.name + " and I like to say " + this.catchphrase + ".";
     }

     };

console.log(monkey.bio());
console.log(monkey.intro());

/**
 *  * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

class Monkey {
    constructor(name, age, gender, catchphrase) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.catchphrase = catchphrase;
    }

   
    getBio() {
        return this.name + " is a " + this.age + " year old " + this.gender + " monkey.";
    }

    
    getIntro() {
        return "Hello, my name is " + this.name + " and I like to say " + this.catchphrase + ".";
    }
}

const george = new Monkey("George", 35, "Male", "Hello World"); 
console.log(george.getBio());
console.log(george.getIntro());

