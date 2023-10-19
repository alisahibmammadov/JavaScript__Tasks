// class Car {
//   constructor(model, il, sahib) {
//     this.model = model;
//     this.il = il;
//     this.sahib = sahib;
//   }
//   surmek() {
//     console.log(`${this.sahib} ${this.model} markali masini surur`);
//   }
//   tormoz() {
//     console.log(`${this.sahib} ${this.model} markali masini tormozlayir`);
//   }
//   qazVermek() {
//     console.log(`${this.sahib} ${this.model} markali masina qaz verir`);
//   }
// }
// const Alisahib = new Car("BMW", 2015, "Alisahib");
// Alisahib.qazVermek();

// function factorial(n){
//   let cem = 1
//   for (let i = 1; i < n; i++) {
//     cem *= n
//   }
//   console.log(cem );
// }
// factorial(3)

function faktoriyel(n) {
  if (n === 0) {
    return 1;
  } else {
   return n * faktoriyel(n - 1);
  }
}
console.log(faktoriyel(10));