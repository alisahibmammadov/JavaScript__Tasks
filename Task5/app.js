//* TASK 1
// let userWord = prompt(
//   "Zehmet olmasa pozisiyanizi daxil edin:User, Admin and Guest"
// );

// if (userWord === "User") {
//   console.log("xos geldin istifadeci");
// } else if (userWord === "Admin") {
//   console.log("xos geldin cenab admin");
// } else if (userWord === "Guest") {
//   console.log("xos geldin qonaq");
// } else {
//   console.log("Zehmet olmasa gosterilen pozisiyalardan birini secin ");
//   userWord = prompt(
//     "Zehmet olmasa pozisiyanizi daxil edin:User, Admin and Guest"
//   );
// }
//* TASK 2 FizzBuzz
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     document.write("FizzBuzz");
//   } else if (i % 3 === 0) {
//     document.write("Fizz");
//   } else if (i % 5 === 0) {
//     document.write("Buzz");
//   }
//   document.write(i + "-");
// }
//* TASK 3
// let userNum = +prompt("Eded daxil edin");
// for (let i = 10; i < 100; i++) {
//   if (userNum === i) {
//     document.write("Daxil etdiyiniz eded 2 reqemlidir");
//   }
// }
// * TASK 5
// let userNum  = +prompt('Eded daxil edin')
// if(userNum % 2 === 0 && userNum %5===0){
//     console.log("istediyim ededdir");
// }
// * TASK 6
// let num1 = +prompt('eded daxil edin')
// let num2 = +prompt('eded daxil edin')
// let num3 = +prompt('eded daxil edin')
// if((num1+ num2+num3) > 100){
//     console.log('ededlerin cemi 100u kecir');
// }
// * TASK 7
// let eded = 45;
// let userNum = +prompt("Ededi texmin edin ");
// let i = 1;
// while (eded !== userNum) {
//   userNum = +prompt("Ededi texmin edin ");
//   i++;
// }
// console.log(`Ehsen ${i} defeye tapdiniz`);
// if (userNum == eded && i == 1) {
//   console.log("kapital bank hesabinda 1000 manat kocurulsun ");
// } else if (i > 1 && i < 6) {
//   console.log("kapital bank hesabinda 750 manat kocurulsun ");
// } else if (i > 4 && i < 10) {
//   console.log("kapital bank hesabinda 250 manat kocurulsun ");
// } else if (i > 10) {
//   console.log("kapital bank hesabinda 250 manat cixilsin ");
// }

// * TASK 8
// let userNum = +prompt("Eded daxil edin ");

// let cem = 0;
// for (let i = 0; i <= userNum; i++) {
//   cem += i;
// }
// console.log(cem);
// * TASK 9
// for (let i = 0; i < 10; i++) {
//     document.write('<br/>')
//   for (let j = 10; j > i; j--) {
//     document.write("*");
//   }
// }
