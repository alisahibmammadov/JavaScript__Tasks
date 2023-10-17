const calculator = {
  num1: 0,
  num2: 0,
  read: function () {
    this.num1 = +prompt("Birinci ededi daxil edin");
    this.num2 = +prompt("Ikinci ededi daxil edin");
  },
  sum: function () {
    console.log(this.num1 * this.num2);
  },
  multiply: function () {
    console.log(this.num1 + this.num2);
  },
  divide: function () {
    console.log(this.num1 / this.num2);
  },
  subtract: function () {
    console.log(this.num1 - this.num2);
  },
};
calculator.read();
calculator.sum();
calculator.multiply();
calculator.divide();
calculator.subtract();
