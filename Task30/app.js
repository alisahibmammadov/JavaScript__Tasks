const a = (arr) => {
  let first = arr[0];
  return arr.every((e) => {
    return e === first;
  });
};

document.write(a([1, 1, 1, "1"]) + "<br/>"); //false
document.write(a(["salam", "salam", "salam"]) + "<br/>"); //true
document.write(a(["alam", "salam", "salam"]) + "<br/><hr/>"); // false

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const repeatedSymbolCounter = (text, char) => {
  let count = 0;
  text.split("").forEach((item) => item === char && count++);
  return document.write(count + "<br/> <hr/>");
};

repeatedSymbolCounter("Azerbaycan", "n");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());
console.log(capitalize("Salam"));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let text = "Mən hər gün javascript öyrənirəm";
// let saitler = ["a", "ı", "o", "u", "e", "ə", "i", "ö", "ü"];

// const saitleriSil = (str) => {
//   return str
//     .split("")
//     .filter((e) => {
//       return e.
//     })
//     .join("");
// };
// document.write(saitleriSil(text));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const nameFormat = (ad) => {
  return ad.split(" ")[0] + " " + ad.split(" ")[1].slice(0, 1) + ".";
};
document.write(nameFormat("Ramin Mammadzade" + "<br/> <hr/>"));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const ilkHerfiDeyis = (soz, herf) => {
  return herf + soz.slice(1);
};
document.write(ilkHerfiDeyis("ramin", "R") + "<br/> <hr/>");
document.write('<br/>')
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const verifyEmail = (email)=>{
    let result
    result = email.split('@')
}