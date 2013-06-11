var assert = require('assert'),
    Calculator = require('./calculator');

module.exports = {
  'A calculator': function () {
    this.calc = new Calculator();
  },
  'begins with a total of 0': function () {
    assert.strictEqual(this.calc.total(), 0);
  },
  'adding 2 and 3': ['add 2', 'add 3'],
  'add 2': function () {
    this.calc.add(2);
  },
  'add 3': function () {
    this.calc.add(3);
  },
  'returns 5 as the total': function () {
    assert.strictEqual(this.calc.total(), 5);
  }
};