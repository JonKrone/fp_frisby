require('../../support');
var r = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = r.split('')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = r.map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = r.filter(r.match(/q/i))


// Exercise 3
//==============
// Use the helper function rkeepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = r.reduce(_keepHighest, 0)


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = r.curry(function(start, end, arr) {
  return arr.slice(start, end)
})


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = slice(0)


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
