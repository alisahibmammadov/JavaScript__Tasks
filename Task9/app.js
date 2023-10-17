const propertyTaker = (obj, str) => {
  console.log(obj[str]);
};
propertyTaker({ continent: "Asia", country: "Japan" }, "continent");
propertyTaker({ country: "Sweden", continent: "Europe" }, "country");
propertyTaker({ name: "ali", age: 12 }, "name");
