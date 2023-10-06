// ! TASK 1 Start
// let hasil = 1;
// for (let i = 1; i < 100; i++) {
//   if (i % 7 === 0) {
//     hasil *= i;
//   }
// }
// console.log(hasil);
// ! TASK 1 End

// ? TASK 2 Start
// let km = +prompt("Km daxil edin");
// let mil = km * 0.6;
// console.log("Daxil etdiyiniz km-nin mil deyeri", mil, "mil");

// ? TASK 2 End

// * TASK 3 Start
// const cardNum = 1234;
// const cardPin = 5678;
// let userCard = +prompt("Kart nomrenizin son 4 reqemini daxil edin z/o");
// let userPin = +prompt("Pin nomrenizi daxil edin z/o");
// let tesdiq;
// let money = 0;

// if (cardNum !== userCard || cardPin !== userPin) {
//   console.log("Kart Nomresi  ve ya pin yalnisdir ");
// } else {
//   money = +prompt("Goturmek istediyiniz meblegi qeyd edin ");
//   tesdiq = confirm("Pulu cixarmaq isteyirsinizmi?");
// }
// if (tesdiq) {
//   console.log(money, "AZN Mebleginiz hazirlanir...");
// } else {
//   console.log("Kartiniz qaytarilir");
// }
// * TASK 3 End
// ? TASK 4 Start

// let duzgunCavablar = 0
// let yalnisCavablar = 0

// const sual1 = "Piyada yol vermemek olarmi?"
// let cavab1 = prompt(sual1 + 'Beli ve ya  Xeyir')
// if(cavab1 === 'Beli'){
//     yalnisCavablar++
// }else if(cavab1 === 'Xeyir'){
//     duzgunCavablar++
// }

// const sual2 = "Suret heddini 20 km asmaq olarmi ?"
// let cavab2 = prompt(sual2 + 'Beli ve ya  Xeyir')
// if(cavab2 === 'Beli'){
//     yalnisCavablar++
// }else if(cavab2 === 'Xeyir'){
//     duzgunCavablar++
// }

// const sual3 = "BC katoqoriyali vesiqe ile masin surmek olarmi "
// let cavab3 = prompt(sual3 + 'Beli ve ya  Xeyir')
// if(cavab3 === 'Beli'){
//     duzgunCavablar++
// }else if(cavab3 === 'Xeyir'){
//     yalnisCavablar++
// }

// const sual4 = "Led faralar istifade etmek olarmi?"
// let cavab4 = prompt(sual4 + 'Beli ve ya  Xeyir')

// if(cavab4 === 'Beli'){
//     yalnisCavablar++
// }else if(cavab4 === 'Xeyir'){
//     duzgunCavablar++
// }
// const sual5 = "Ickili masin surmek olarmi "
// let cavab5 = prompt(sual5 + 'Beli ve ya  Xeyir')
// if(cavab5 === 'Beli'){
//     yalnisCavablar++
// }else if(cavab5 === 'Xeyir'){
//     duzgunCavablar++
// }
// document.write(`Duzgun cavablarin sayi ${duzgunCavablar} <br/>`)
// document.write(`Yalnis cavablarin sayi ${yalnisCavablar} <br/>`)
// if(duzgunCavablar < 5){
//     document.write('teessufki imtahandan kesildiniz yeniden imtahan vermelisiniz <br/>')
// }else{
//     document.write('Tebrikler imtahandan kecdiniz <br/>')
// }
// ? TASK 4 End
// ! TASK 5 Start
let salam = prompt("Yazi daxil edin ");
while (salam !== "salam") {
  salam = prompt("Yazi daxil edin ");
}
// ! TASK 5 End
