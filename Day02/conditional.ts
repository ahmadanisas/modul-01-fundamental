// CONDITIONAL STATEMENT : jika ada 2 pilihan statement

/** 
 * - IF STATEMENT : untuk memeriksa satu 1 kondisi
 * - IF...ELSE STATEMENT : untuk memeriksa 2 kondisi
 * - IF...ELSE IF...ELSE STATEMENT : untuk memeriksa 3 kondisi atau lebih
 * - SWITCH CASE STATEMENT : untuk memeriksa data dalam pencocokan nilai
*/

// Contoh data
let nama: string = "Edo";
let usia: number = 10;


// IF
/**
 * Aturan penulisan :
 * if(condition){
 *      // code
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON/LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam IF terpenuhi (bernilai TRUE)
*/

// example : memvalidasi batas usia
if(usia > 16) {
    console.log(`${nama} sudah dewasa`);
}
// jika true, code akan jalan. jika false tidak akan jalan. karena edo 10 tahun (FALSE), maka code tidak jalan



// IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *      // code
 * } else {
 *      // code
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON/LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam IF terpenuhi (bernilai TRUE)
*/

usia = 10
if(usia > 16) {
    const print: string = `${nama} SUDAH dewasa`;
    console.log(print);
} else {
    const print: string = `${nama} BELUM dewasa`;
    console.log(print);
}
// kenapa const print tidak error? karena berbeda scope (wilayah), ditandai dengan {}

let isNgantuk: boolean = true;
if(isNgantuk) {
    console.log("Beli Kopi");
} else {
    console.log("Beli Eskrim");
}

let isLapar: boolean = false;
if(isLapar) {
    console.log("Beli Makan")
} else {
    console.log("Beli Air")
}


// IF...ELSE IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *      // code
 * } else if(condition){
 *      // code
 * } else {
 *      // code 
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON/LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition di dalam IF terpenuhi (bernilai TRUE)
*/

// Example : klasifikasi nilai ujian
// INPUT
const examGrade: number = 70;

// PROCESS
let result: string;
if(examGrade >= 90 ) {
    result = "Grade A";
} else if(examGrade >= 80 && examGrade < 90) {
    result = "Grade B";
} else if(examGrade >= 70 && examGrade < 80) {
    result = "Grade C";
} else {
    result = "Grade F";
}

// OUTPUT
console.log(result);



// SWITCH...CASE
/**
 * Aturan penulisan:
 * switch(data){
 *      case value:
 *          // code
 *      default:
 *          // code
 * }
 */

//example:
const job: string = "Coder";

switch(job){
    case "Coder": // job === "Coder"
        console.log("Membuat aplikasi");
        break; // fungsinya agar tidak jalan terus, pemisah seperti scope di if else
    case "Driver":
        console.log("Mengemudi");
        break;
    default:
        console.log("Tidak tau");
}