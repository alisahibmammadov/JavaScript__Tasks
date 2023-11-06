const rangeBox = document.getElementById("rangeBox");
const range = document.getElementById("range");
rangeBox.innerText = range.value;
range.addEventListener("input", () => {
  rangeBox.innerText = range.value;
});
