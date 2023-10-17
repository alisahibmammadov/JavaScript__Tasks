const prop2taker = (obj) => {
  console.log(obj["prop-2"]);
};
prop2taker({ one: 1, "prop-2": 2 });
prop2taker({ "prop-2": "two", prop: "test" });
