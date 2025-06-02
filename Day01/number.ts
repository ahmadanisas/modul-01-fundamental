// NUMBER : data angka
let jarak: number = 1500; // Nilai INT/INTEGER
let berat: number = 90.25 // Nilai FLOAT/decimal

// Arithmethic : +, -, *, /, %

// Algorithm code perhitungan penjumlahan
// 1. menyiapkan data yang harus dijumlahkan
let angka1: number = 43;
let angka2: number = 21;
// 2. memproses penjumlahan dari data yang diberikan
const result: number = angka1 + angka2;
// 3. menampilkan hasil akhir penjumlahan di terminal
console.log(result);

// Fungsi Math Object
const PiMath: number = Math.PI
console.log(PiMath);

// Pembulatan nilai
console.log(Math.round(25.6));
console.log(Math.round(25.4));
console.log(Math.ceil(25.4));
console.log(Math.floor(25.4));

console.log(Math.pow(4, 2)); //pangkat 2
console.log(Math.sqrt(16)); //akar
console.log(Math.cbrt(27)); //akar 3

// MIN dan MAX
console.log(Math.min(1, 2, 3, 81, -20));
console.log(Math.max(1, 2, 3, 81, -20));

// Random
console.log(Math.random()) //dari 0-1

// Parsing data
let price: number = 25500;
console.log(price.toLocaleString());
console.log(price.toLocaleString("id"));

console.log(
    price.toLocaleString("id", {
        style: "currency",
        currency: "IDR"
    })
);