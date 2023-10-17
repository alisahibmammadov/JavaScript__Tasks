class Car {
  constructor(model, il, sahib) {
    this.model = model;
    this.il = il;
    this.sahib = sahib;
  }
  surmek() {
    console.log(`${this.sahib} ${this.model} markali masini surur`);
  }
  tormoz() {
    console.log(`${this.sahib} ${this.model} markali masini tormozlayir`);
  }
  qazVermek() {
    console.log(`${this.sahib} ${this.model} markali masina qaz verir`);
  }
}
const Alisahib = new Car("BMW", 2015, "Alisahib");
Alisahib.qazVermek();
