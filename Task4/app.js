// function tellHi(name) {
//   console.log(`Hi dear ${name}`);
//   return "told Hid";
// }
// const a = tellHi("Alisahib");
// console.log(a);
// ?????????????????????????????????
// const remainTen = (ed) => ed % 10;
// console.log(remainTen(34));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const isEven = (num) => {
//   return num % 2 === 0 ?  true : false;
// };
// const isEven = (num) => !(num % 2) && true;
// const isEven = (num) => !(num % 2);
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(5));
// ********************************************

// const average = (num1, num2) => {
//   const edediOrta = (num1 + num2) / 2;
//   return `${num1} ve ${num2} ededlerinin ededi ortasi ${edediOrta}-dir`;
// };
// console.log(average(12, 13));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const cem = (n1, n2, func) => {
//   func(n2);
//   return n1 + n2;
// };

// console.log(
//   cem(12, "5", (x) => {
//    return console.log(Number(x));
//   })
// );
// ******************************************
// const func = (n1, n2, callback) => {
//   let eded = callback(50, 50);
//   return (n1 + n2 + eded) / 2;
// };
// console.log(
//   func(100, 200, (n1, n2) => {
//     return (n1 + n2) / 2;
//   })
// );
// !!!!!!!!!!!!!!!!!!!!!!!
// const example = (cb, text) => {
//   const userPrompt = prompt(text);
//   cb(userPrompt);
// };
// example((txt) => {
//   console.log(txt);
// }, "ne isteyirsiniz daxil edin ");

const multiply = (n1,n2,callback)=>{
    let hasil = `${n1} * ${n2} = ${n1 * n2}` 
    callback(hasil)
    return 
}
console.log(multiply(12,17,(hasil)=>console.log(hasil)));