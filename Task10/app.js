const existsAndTruthy = (obj, str) => {
  if (obj[str] === null) {
    return console.log(false);
  } else if (obj[str] === undefined) {
    return console.log(false);
  }else if(obj[str]){
    return console.log(true);
  }
};
existsAndTruthy({a:1,b:2,c:3},'b') //true
existsAndTruthy({x:'a',y:null,z:'c'},'y') //false
existsAndTruthy({ x: "a", b: "b", z: undefined }, "z"); //false
