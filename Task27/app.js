let kecenIlSayi = 0;
let kecenAySayi = 0;
let kecenGunSayi = 0;
function lifeTime() {
  let userYear = +prompt("Doğum ilinizi qeyd edin");
  let userMonth = +prompt("Doğum ayınızı qeyd edin (Rəqəmlə)");
  let userDay = +prompt("Doğum gününüzü qeyd edin");
  const date = new Date(userYear, userMonth - 1, userDay);
  const difference = Date.now() - date;
  kecenIlSayi = parseInt(difference / 1000 / 60 / 60 / 24 / 365);
  kecenAySayi = parseInt((difference / 1000 / 60 / 60 / 24 / 365) * 12);
  kecenGunSayi = parseInt(difference / 1000 / 60 / 60 / 24);
  document.write(
    `kecen il sayi: ${kecenIlSayi} <br/> kecen ay sayi: ${kecenAySayi} <br/> kecen gun sayi: ${kecenGunSayi}`
  );
}
lifeTime();
