const maxLife = 77;

function azrael() {
  let userAge = +prompt("Yaşınızı daxil edin");
  if (userAge > maxLife) {
    document.write("O dünyada sizə qayıb yazılır artıq");
  } else if (userAge === maxLife) {
    document.write("Ömrünüz bitib oturun sakitcə ölümü gözləyin");
  } else {
    document.write(`Sizin ${maxLife - userAge} il ömrünüz qalıb`);
  }
}
azrael();
