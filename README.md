# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joe_grewal/lotide`

**Require it:**

`const _ = require('@joe_grewal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts whether two arrays are equal.
* `assertEqual`: Asserts whether two values are equal.
* `assertObjectsEqual`: Asserts whether two objects are equal.
* `countLetters`: A function that receives a string and returns a count of each of the letters in that sentence.
* `countOnly`: A function that is given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays`: A function that takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: A function that takes in two objects and returns true or false, based on a perfect match.
* `findKey`: A function that takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: A function that takes in an object and a value. It scans the object and returns the first key which contains the given value.
* `flatten`: A function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head`: A function that returns the first item in an array.
* `letterPositions`: A function that returns all the indices in the string where each character is found.
* `map`: A function that will return a new array based on the results of the callback function.
* `middle`: A function that takes in an array and returns the middle-most element(s) of the given array.
* `tail`: A function that returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil`: A function that will return a slice of the array with elements taken from the beginning. It should keep going until the callback returns a truthy value.
* `without`: A function that returns a subset of a given array, removing unwanted elements.