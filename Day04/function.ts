// FUNCTION
/**
 * Definisi : sekumpulan program yang disatukan untuk mengerjakan proses khusus, yang biasanya bersifat reusable.
 * Kategori : Built-in function dan User-defined function
 * Aturan penulisan :
 * - Penamaan function mengikuti aturan nama variable
 * - Bisa menerima parameter/argumen (penampung dari function, untuk menerima nilai dari luar function)
 * - Function biasanya menghasilkan nilai output melalui keyword return di dalamnya
 * - Opsi penulisan bisa menggunakan Declarative Func, Function Expression, atau Arrow Function
 */

// Contoh tanpa function
//INPUT : dua variable yang menampung data untuk dijumlahkan
let angkaA: number = 20;
let angkaB: number = 13;
//PROCESS : memproses penjumlahan kedua variable
const hasil: number = angkaA + angkaB;
//OUTPUT : menampilkan hasil penjumlahan
console.log(hasil);

// Contoh DENGAN FUNCTION (model Declarative Function)
/**
 * Rumus Declarative Function :
 * function namaFunc(parameter1, parameter2,...){
 *      // code
 * }
 */
// Membuat Function
function penjumlahan() {
  let angkaA: number = 4;
  let angkaB: number = 2;

  const hasil: number = angkaA + angkaB;

  return hasil; // return fungsinya mengeluarkan nilai di dalam
}
// Menggunakan Function
penjumlahan();

// Menampilkan Function
console.log(penjumlahan());
// Misal disimpan dulu variablenya
let printPenjumlahan = penjumlahan();
console.log(printPenjumlahan);

// Function with PARAMETER for REUSABLE
function pengurangan(angkaA: number, angkaB: number) {
  const hasil: number = angkaA - angkaB;
  return hasil;
}
console.log(pengurangan(10, 45));
console.log(pengurangan(23, 17));
console.log(pengurangan(91, 45));
