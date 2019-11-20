"use strict";
exports.__esModule = true;
var convertible = /** @class */ (function () {
    function convertible(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    convertible.prototype.getCar = function () {
        return new Array(this.make, this.model, this.year.toString());
    };
    convertible.prototype.isGMC = function () {
        if (this.make == "GMC") {
            return true;
        }
        else {
            return false;
        }
    };
    return convertible;
}());
exports.convertible = convertible;
var ford = new convertible("Ford", "Mustang", 1998); // Creates an instance of class convertible with values Ford, Mustang and 1998
console.log(ford.getCar()); // Returns an array of all the values of the convertible
console.log(ford.isGMC()); // Returns whether or not this convertible is made by GMC
