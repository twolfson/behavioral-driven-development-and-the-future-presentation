var assert = require('assert'),
    Calculator = require('./calculator');

describe('A calculator', function () {
  before(function () {
    this.calc = new Calculator();
  });

  describe('adding 2 and 3', function () {
    before(function () {
      this.calc.add(2).add(3);
    });

    it('returns 5 as the total', function () {
      assert.strictEqual(this.calc.total(), 5);
    });
  });

  it('begins with a total of 0', function () {
    assert.strictEqual(this.calc.total(), 0);
  });
});