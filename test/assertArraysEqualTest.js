const assertArraysEqual = require('../assertArraysEqual');

// Test cases:
assertArraysEqual([1], [1]);
assertArraysEqual(['a'], ['a']);
assertArraysEqual(['abc', 123], ['abc', 123]);