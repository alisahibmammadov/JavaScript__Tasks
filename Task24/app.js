const date = new Date();
const weekDay = {
  1: "Bazar ertətis",
  2: "Çərşənbə axşamı",
  3: "Çərşənbə",
  4: "Cümə axşamı",
  5: "Cümə",
  6: "Şənbə",
  0: "Bazar",
};
document.write(weekDay[date.getDay()]);
