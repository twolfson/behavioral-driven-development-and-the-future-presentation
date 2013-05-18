var assert = require('assert'),
    Calculator = require('./calculator.js');

module.exports = {
  "A calculator": function () {
    this.calc = new Calculator();
  },
  "has a total of 0": function () {
    var total = this.calc.total();
    assert.strictEqual(total, 0);
  },
  "adding 2 and 3": ['add 2', 'add 3'],
  'add 2': function () {
    this.calc.add(2);
  },
  'add 3': function () {
    this.calc.add(3);
  },
  "has a total of 5": function () {
    var total = this.calc.total();
    assert.strictEqual(total, 5);
  }
};