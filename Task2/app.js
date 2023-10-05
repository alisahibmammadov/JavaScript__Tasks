let hasil = 1
for (let i = 1; i < 100; i++) {
    if(i % 7 === 0) {
        hasil *= i
    }   
}
console.log(hasil);