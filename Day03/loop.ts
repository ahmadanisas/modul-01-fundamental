// WHILE LOOP & DO WHILE : tergantung kondisi
// FOR LOOP : diketahui batas

// LOOPING STATEMENT : penulisan code yang ditujukan untuk mengulang eksekusi suatu program hingga kondisi tertentu.
// e.g list nama

// contoh salah, penggunaan console.log over
console.log("1. Edo");
console.log("2. Abdi");
console.log("3. Andre");

/**
 * WHILE LOOP : pengulangan program yang akan selalu berjalan selama kondisi masih terpenuhi. code berpotensi tidak jalan samsek.
 * Aturan penulisan :
 * while(condition){
 *      // code
 * };
 * condition : sama kaya if else ( boolean, truthly falsy, comparison, logical)
 * NOTES : jangan sampai selalu TRUE, nanti jadi infinite loop dan loop selalu nyala
 */

let count: number = 1;
// loop 10x
while (count <= 10) {
  console.log(count);
  count++; // count = count+1 (inkremen, count direassign)
}

while (true) {
  count++;

  if (count === 15) {
    console.log(count);
    break; // kalo pake TRUTHLY harus pake break agar end loop
  }
}

let isBoolean: boolean = true;
while (isBoolean) {
  count++;

  if (count === 25) {
    console.log(count);
    isBoolean = false; // kalo boolean TRUE harus diFALSEkan agar end loop
  }
}

/**
 * DO...WHILE : kebalikan while. code jalan dulu, baru dicek. code pasti jalan minimal 1x
 * Aturan penulisan :
 * do{
 *      // code
 * } while(condition)
 */

let counter: number = 1;
do {
  console.log(counter);
  counter++;
} while (counter < 1);

/**
 * FOR LOOP : digunakan ketika batas looping sudah ditentukan sejak awal (dalam hitungan angka)
 * Aturan penulisan :
 * for(counter_declaration;counter_condition;counter){
 *      // code
 * }
 *
 * - counter_declaration : variable yg mendefinisikan nilai awal dari hitungan batas looping
 * - counter_condition : kondisi untuk menentukan batas looping
 * - counter : proses perhitungan increment atau decrement
 */

for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

//latihan
const limit = 4;
let cetak: string = "";
for (let i = 0; i < limit; i++) {
  if (i % 2 === 0) {
    cetak += `${i} : GENAP | `;
  } else {
    cetak += `${i} : GANJIL | `;
  }
}
console.log(cetak);
