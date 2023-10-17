const employee = {
  id: 1,
  name: "Alisahib",
  surname: "Mammadov",
  job: "Developer",
  salary: "300",
  company: "Jed",
  age: 25,
  infoEmp: function () {
    console.log(`${this.name} ${this.company}-de ${this.job} isleyir`);
  },
  hbd: function () {
    console.log(this.age + 1);
  },
  getFullName: function () {
    console.log(this.name + " " + this.surname);
  },
  upgradeSalary: function (arg) {
    console.log(Number(this.salary) + arg);
  },
};
employee.upgradeSalary(11);
