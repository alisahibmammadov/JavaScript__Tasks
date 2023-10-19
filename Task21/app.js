function verifyGmailAddress(gamil) {
  let atIndex = gamil.indexOf("@");
  if (gamil.slice(atIndex + 1) !== "gmail.com") {
    console.log("Gmail-in sonu 'gmail.com' ilə bitməlidir");
  }
  if (!(gamil.slice(0, atIndex).length >= 5)) {
    console.log(
      "Gmail üçün təyin etdiyiniz adın simvol sayı 5-dən çox olmalıdır"
    );
  } else {
    return console.log("Gmail keçərlidir");
  }
}

verifyGmailAddress("abcdf@gmail.com");
