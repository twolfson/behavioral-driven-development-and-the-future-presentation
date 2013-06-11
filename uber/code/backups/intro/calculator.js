function Calculator() {
  this.sum = 0;
}
Calculator.prototype = {
  add: function (num) {
    this.sum += num;
    return this;
  },
  total: function () {
    return this.sum;
  }
};

module.exports = Calculator;