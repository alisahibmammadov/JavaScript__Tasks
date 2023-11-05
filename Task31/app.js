// const numbers = [-1, 2, 5, 7, 7, -3, 7, -6, 4, -3];

// console.log(numbers.reduce((a, b) => console.log(a - b), 0));

// const negativeNumbers = (arr) => {
//   return arr.filter((neg) => neg < 0).join();
// };

// console.log(negativeNumbers(numbers));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let names = ["ali", "reza", "alireza", "muhammad", "coshqun", "eles"];

// const longName = (arr) => {
//   return arr.reduce((a, b) => {
//     return a.length > b.length ? a : b;
//   }, "");
// };
// console.log(longName(names));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// const printWithIndex = (name) => {
//   console.log(names.indexOf(name) + "-" + names[names.indexOf(name)]);
// };
// names.forEach(printWithIndex);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const kebabToSnake = (str)=>{
//     console.log(str.split('-').join('_').toUpperCase())
// }

// kebabToSnake("ali-greenheart"); //ALI_GREENHEART
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let newArr = numbers.map((elem) => (elem < 0 ? elem * -1 : elem * 2))

// console.log(newArr);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let names = ["Sam", "Alan", "Bill", "Adam", "Anna", "George"];
console.log(names.filter((elem) => elem[0] === "A"));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84];
let odd = 0;
let even = 0;
const countEvensAndOdds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] - 2 !== -2 ) {
      even++;
    //   console.log(even);
    } else if (arr[i] % 2 === 1) {
      odd++;
    }
  }
  console.log("odd"+ " "+odd,"even"+" "+even);
};

countEvensAndOdds(numbers); // evens: 10, odds: 7
