//* TASK 1
// function logGreeting (name) {
//     console.log(`${name} is ad JS developer`);
// }
// logGreeting('Alisahib')
//* TASK 2
// function userName(name) {
//   console.log(`${name} is active now`);
// }
// userName("Alisahib");
// userName("Elnur");
// userName("Alim");
//* TASK 3
// function fourth(num) {
//   return num * num * num * num;
// }
// console.log(fourth(10));
//* TASK 4
// for (let i = 99; i < 1000; i++) {
//   i % 10 === 0 && console.log(i);
// }
//* TASK 5
// let cem = 0;
// for (let i = 10; i < 100; i++) {
//   i % 2 === 1 ? cem += i : null

// }
// console.log(cem);
//* TASK 6
// let userNum = +prompt("Eded daxil edin ");
// let cem = 0;
// for (let i = 100; i < 1000; i++) {
//   i % userNum === 0 ? (cem += i) : null;
// }
// console.log(cem);
//* TASK 7
// function add(n1, n2, callback) {
//   callback(n1 + n2);
// }
// add(2, 5, (num) => console.log(num));
// add(2, 5, (num) => alert(num));
//* TASK 8
function genderName(gender, name) {
  gender("K");
  console.log(name);
}
genderName((g) => {
  if (g === "K") {
    console.log("Mr");
  } else if (g === "Q") {
    console.log("Ms");
  }
}, "Alisahib");
