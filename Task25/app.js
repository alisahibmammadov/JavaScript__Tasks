const date = new Date();
const monthsDay = date.getMonth();
const months = {
  0: "yanvar",
  1: "fevral",
  2: "mart",
  3: "aprel",
  4: "may",
  5: "iyun",
  6: "iyul",
  7: "avqust",
  8: "sentyabr",
  9: "oktyabr",
  10: "noyabr",
  11: "dekabr",
};
document.write(months[monthsDay]);
