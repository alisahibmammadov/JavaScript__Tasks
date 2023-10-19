function repeatedSymbolCounter(str, str2) {
  let newStr = str.replaceAll(str2, "");
  return str.length - newStr.length;
}

console.log(repeatedSymbolCounter("ALIONALI", "A"));
