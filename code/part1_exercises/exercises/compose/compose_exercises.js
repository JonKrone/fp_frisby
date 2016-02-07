require('../../support');
var r = require('ramda');
var accounting = require('accounting');

// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use r.compose() to rewrite the function below. Hint: r.prop() is curried.
var isLastInStock = r.compose( r.prop('in_stock'), r.last)


// Exercise 2:
// ============
// use r.compose(), r.prop() and r.head() to retrieve the name of the first car
var nameOfFirstCar = r.compose(r.prop('name'), r.head());


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

var averageDollarValue = r.compose( _average, r.map(r.prop('dollar_value')) )


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = r.replace(/\W+/g, '_');
var _toLowerCase = function(x) { return x.toLowerCase() };

var sanitizeNames = r.compose( r.map(_toLowerCase), r.map(_underscore), r.map(r.prop('name')) );
var sanitizeNames = r.map(r.compose(_underscore, _toLowerCase, r.prop('name')))


// Bonus 1:
// ============
// Refactor availablePrices with compose.

var availablePrices = r.compose(r.join(', '),
                        r.map(r.compose( acc.formatMoney, r.prop('dollar_value'))),
                        r.filter(r.prop('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use r.flip()

// var fastestLog = function(car) { return car.name + ' is the fastest' }

var fastestCar = r.compose( r.flip(r.concat)(' is the fastest'), r.prop('name'), r.last, r.sortBy(r.prop('horsepower')) )


module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };
