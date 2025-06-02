// STRING : data yang berisi karakter huruf, angka, atau symbol dan ditandai dengan symbol quotes.
let namaToko: string = "TOKO OLGA";
namaToko = "TOKO DONAT";

// Template literal (diawali symbol `)
let alamatToko :string = `Jl. Genteng kali Surabaya`;

// Penggabungan data string
// Cara 1 : menggunakan penjumlahan data string (symbol +)
let printInfo:string = namaToko + " " + alamatToko + " 0834343"
console.log(printInfo); 

// Cara 2 : Template literal
printInfo = `${namaToko} ${alamatToko} Telp. 3283729`
console.log(printInfo); 

// Fungsi bawaan tipe data string
// string.length : menghitung panjang data string atau menghitung jumlah variable dalam data string
let message: string = "Hello";
console.log(message.length);

// string.toLowerCase() : mengubah semua karakter menjadi huruf kecil
console.log(message.toLowerCase());

// string.toUpperCase() : mengubag semua karakter menjadi huruf besar
console.log(message.toUpperCase());

// string.include() : memastikan suatu kata atau karakter ada di dalam string
console.log(message.includes("e"));
