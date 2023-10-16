let obj = {
  name: "Əlisahib",
  surname: "Məmmədov",
  age: 25,
  birthday: {
    day: "24",
    month: "Noyabr",
    year: 1998,
    getFullBirthday: () =>
      `${obj.birthday.day} ${obj.birthday.month} ${obj.birthday.year}`,
  },
  address: {
    coutry: "Azərbaycan",
    city: "Bakı",
    home: "Xırdalan",
    postcode: 909,
    getFullAddress: () =>
      `Mən ${obj.address.coutry}nın ${obj.address.city} şəhərinin ${obj.address.home} qəsəbəsində yaşayıram`,
  },
  contact: {
    phoneNumber: "+994505555555",
    email: "alisahibmammadov98@gmail.com",
  },
  getFullInfo: () =>
    `Salam. Mən ${obj.name} ${obj.surname}. ${obj.birthday.day}.${obj.birthday.month}.${obj.birthday.year}-ci ildə dünyaya gəlmişəm. Hal hazırda ${obj.address.city} şəhərinin ${obj.address.home} qəsəbəsində yaşayıram.Ana vətənim ${obj.address.coutry}-dır`
  
};
console.log(obj.birthday.getFullBirthday());
console.log(obj.address.getFullAddress());
console.log(obj.getFullInfo());
