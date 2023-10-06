// function getresult(n) {
//   let num = +prompt("Eded daxil edin ");
//   console.log(n * num);
// }
// getresult(5);
// ?????????????????????????????????????????????????????????
// function multiply(num1, num2) {
//   if (isNaN(num1)) {
//     num1 = 1;
//   }
//   if (isNaN(num2)) {
//     num2 = 1;
//   }

//   console.log(num1 * num2);
// }
// multiply(2, 5);
// multiply(2);
// multiply();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function findEvenNumbers(n1, n2) {
//   for (let i = n1 + 1; i < n2; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// findEvenNumbers(5, 32);

// *******************************************************

// let ad = "ali";
// function test() {
//   ad = "ahmad";
// }

// test()
// console.log(ad);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function formalApply(ad, cins) {
//   let g;
//   if (cins === "m" || cins === "M") {
//     g = "MR";
//   } else if (cins === "f" || cins === "F") {
//     g = "MS";
//   }

//   return `Hi ${g}. ${ad.toUpperCase()}`;
// }
// console.log(formalApply("pakize", "f"));
// ???????????????????????????????????????
// void funksiyalar - return olmayan funksiyalardir ve geriye undefined qaytarir

function a() {}
console.log(a());
// ***************************************

function getNumber() {
  let num = +prompt("Eded daxil edin ");
  return num;
}
let ed1 = getNumber();
let ed2 = getNumber();
console.log(ed1 + ed2);
