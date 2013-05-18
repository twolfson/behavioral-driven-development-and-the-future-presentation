var assert = require('assert'),
    Calculator = require('./calculator.js');

describe('A calculator', function () {
  before(function () {
    this.calc = new Calculator();
  });

  it('has a total of 0', function () {
    var total = this.calc.total();
    assert.strictEqual(total, 0);
  });

  describe('adding 2 and 3', function () {
    before(function () {
      this.calc.add(2).add(3);
    });

    it('has a total of 5', function () {
      var total = this.calc.total();
      assert.strictEqual(total, 5);
    });
  });
});