function repeatedSymbolCounter(str, str2) {
  return str.length - str.replaceAll(str2, "").length;
}

console.log(repeatedSymbolCounter("ALIONALI", "A"));
