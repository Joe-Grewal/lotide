const assert = require('chai').assert;
const tail = require('../tail');

// Test cases:
describe('#tail', () => {
  it('returns ["Lighthouse, Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns ["b", "c"] for ["a", "b", "c"]', () => {
    assert.deepEqual(tail(["a", "b", "c"]), ["b", "c"]);
  });
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('returns 1 for tail([1, 2]).length', () => {
    assert.strictEqual(tail([1, 2]).length, 1);
  });
});