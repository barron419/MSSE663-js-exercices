export interface car {
    make: string;
    model: string;
    year: number;

    getCar: () => Array<string>; // Returns an array of all the car's attributes
    isGMC: () => boolean;       // Returns whether or not make is equal to GMC
}

export class convertible implements car {

    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCar(): Array<string> {                        // Creates an Array of the Make, Model, Year of the car
            return new Array(this.make, this.model, this.year.toString());
    }

    isGMC(): boolean {                              // Creates a boolean of whether or not the car is a GMC
        if(this.make == "GMC") {
            return true;
        }

        else {
            return false;
        }
    }
}

const ford = new convertible("Ford", "Mustang", 1998);           // Creates an instance of class convertible with values Ford, Mustang and 1998

console.log(ford.getCar());                              // Returns an array of all the values of the convertible
console.log(ford.isGMC());                              // Returns whether or not this convertible is made by GMC
