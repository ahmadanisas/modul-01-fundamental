// CALLBACK FUNCTION :  - sebuah fungsi yang dijalankan di dalam fungsi lain dan dimasukkan melalui parameter
//                      - sebuah fungsi yang langsung dibuat di dalam parameter fungsi lain
/**
 * Aturan penulisan :
 * function mainFunction(callbackFn){
 *      callbackFn();
 * }
 *
 * - callbackFunc : parameter yang harus diisi dengan fungsi
 * - bisa callback, cb, callbackFn
 * - mainFunction reusable, callbackFn non-reusable
 */

// mainFunction declaration (cuma nampilin perhitungan aja)
function printCalculation(callbackFn) {
  // menjalankan fungsi dari parameter callbackFn dan ditampung outputnya ke dalam variable result
  const result = callbackFn();

  return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(
  printCalculation(function () {
    let angkaA: number = 20;
    let angkaB: number = 19;

    return angkaA + angkaB;
  })
);

console.log(
  printCalculation(function () {
    let numA: number = 11;
    let numB: number = 88;

    return numA * numB;
  })
);

console.log(
  //pake arrow function => , "function" tidak perlu ditulis
  printCalculation(() => {
    let numA: number = 11;
    let numB: number = 88;

    return numA - numB;
  })
);

function pembagian() {
  let numA: number = 11;
  let numB: number = 88;

  return numA / numB;
}
console.log(printCalculation(pembagian));

// ARRAY FUNCTION: forEach, map, filter
// forEach(callbackFn) :    - panggil data yang bertipe array
//                          - sebagai pilihan selain for loop untuk mengakses isi dari tiap data array
const students: string[] = ["Abdi", "Edi", "Aldo"];
// jika menggunakan for loop
for (let index = 0; index < students.length; index++) {
  const value = students[index];
  console.log(`${index + 1}.${value}`);
}

students.forEach((value, index) => {
  console.log(`${index + 1}.${value}`);
});

// Duplikasi cara kerja array.forEach
function duplicateForEach(arrayData: any[], callbackFn) {
  // isi code?
}

duplicateForEach(students, (value: any, index: number) => {
  console.log(`${index + 1}.${value}`); //result
});

// array.map(callbackFn): untuk merubah seluruh data array menjadi data array yang baru
// [1, 2, 3] -> [2, 4, 6]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1, 2, 3] -> ["1", "2", "3"]
// [1000, 2000, 3000] -> ["Rp. 1.000", "Rp. 2.000", "Rp. 3000"]

const dataArray: any[] = [1, 2, 3, 4, 5];

const newArray = dataArray.map((value, index) => {
  return value * 2;
});

console.log(newArray);

const uang: number[] = [2000, 5000, 10000];

const newUang = uang.map((value, index) => {
  return value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
});
console.log(newUang);

// Exercise Duplicate map
function duplicateMap(arrayData: any[], callbackFn) {
  // isi code
  const arr: any[] = [];
  for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    console.log(value);
    console.log(callbackFn(value, index));

    arr.push(callbackFn(value, index));
  }

  return arr;
}

const numberToCurrency = duplicateMap(uang, function (value) {
  return value * 2;
});
console.log(numberToCurrency);

// array.filter(callbackFn) :untuk menhasilkan array baru sesuai acuan filter yang diberikan
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12]

const angka: number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap: number[] = angka.filter((value, index) => {
  return value % 2 === 0;
});
console.log(angkaGenap);

const angkaGanjil: number[] = angka.filter((value, index) => {
  return value % 2 !== 0;
});
console.log(angkaGanjil);