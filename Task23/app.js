const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
document.write(
  `${day < 10 ? "0" + day : day}. ${month < 10 ? "0" + month : month}. ${year}`
);
