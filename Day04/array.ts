// ARRAY (Reference Data Type)
// tipe data yang mampu menampung berbagai macam tipe data lain.
// tipe datanya mostly sama
/**
 * Ciri-ciri :  - dibungkus oleh kurung siku, contoh : [1, 2, 3]
 *              - setiap data di dalam array memiliki alamat index, yang dimulai dari index ke-0.
 * Tujuan : untuk mempermudah pengelolaan data.
 */

let siswa1: string = "Edo";
let siswa2: string = "Edi";
let siswa3: string = "Eda";

// Disimpan dalam bentuk array
const daftarSiswa: string[] = ["Edo", "Edi", "Eda"]; // WAJIB CONST!
const daftarKelas: string[] = new Array("IPA", "IPS", "BAHASA"); // cara ini jarang dipake

// Cara mengakses suatu data dari array : namaVariable[index_data_yang_dipilih]
// index mulai dari 0
console.log(daftarSiswa[1]);
console.log(daftarKelas);

// Array Destructure : cara untuk mengakses data pada array dengan menandai tiap data menggunakan variable
// hanya berlaku untuk array yang mengelompokkan data yang berbeda beda, bukan menampung berbagai macam data
const data: any[] = ["Nisa", 23, "Surabaya"];
let [namaOrang, umur, asal] = data;
console.log(namaOrang);
console.log(umur);
console.log(asal);


// Memperbarui suatu data array
daftarSiswa[2] = "Andre"; //direassign
console.log(daftarSiswa);

// Fungsi bawaan array untuk mengelola data
// array.push(newData) : untuk menambahkan data baru di akhir array
daftarSiswa.push("Olga");
console.log(daftarSiswa);
// array.pop() : untuk menghapus data terakhir
daftarSiswa.pop();
console.log(daftarSiswa);
// array.unshift() : untuk menambahkan data baru di awal array
daftarSiswa.unshift("Nisa");
console.log(daftarSiswa);
// array.shift() : untuk menghapus data di awal array
daftarSiswa.shift();
console.log(daftarSiswa);
// array.length() : untuk mengetahui banyak data di dalam array
console.log(daftarSiswa.length);
// array.splice(pilihanIndex, jumlahDataYangDihapus, newData) :untuk menghapus, memperbarui, dan menyisipkan data baru pada index yang dipilih
// menghapus data berdasarkan index
daftarSiswa.splice(1, 1);
console.log(daftarSiswa);
// menyisipkan data
daftarSiswa.splice(1, 0, "Edi", "Dimas", "El");
console.log(daftarSiswa);
// memperbarui data
daftarSiswa.splice(2, 1, "Eki");
console.log(daftarSiswa);

// Exercise
/**
 * Deskripsi :
 * Dari data array berikut:
 * const daftarSiswa: string[] = ["Edo", "Edi", "Eda"];
 * Cetak semua nama dengan nomor urut
 */
/**
 * Output yang diharapkan:
 * 1. Edo
 * 2. Edi
 * 3. Eda
 */

// jawabanku
const daftarSiswa1: string[] = ["Edo", "Edi", "Eda"];
// menggunakan for loop
for (let i = 0; i < daftarSiswa1.length; i++) {
  console.log(`${i + 1}. ${daftarSiswa1[i]}`);
}
// PROCESS
// 1. Menyiapkan penampung output dalam bentuk string
let output: string = "";
// 2. Mengakses data di dalam array satu per satu
// menggunakan for loop karena diketahui batasnya 3
// for loop ketemu array pasti increment ++
for (let index: number = 0; index < daftarSiswa.length; index++) {
  const namaSiswa: string = daftarSiswa[index]; // menampung nilai dari tiap INDEX daftarSiswa
  // 3. Memasukkan data ke dalam variable output
  output = output + `${index + 1}. ${namaSiswa} \n`;
}
console.log(output);
