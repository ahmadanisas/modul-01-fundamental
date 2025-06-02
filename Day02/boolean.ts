// BOOLEAN : data yang bernilai benar (true) atau salah (false)
let isActive: boolean = true;
let isDeleted: boolean = false;

// MENGHASILKAN DATA BOOLEAN
// 1. Berdasarkan tipe data lain
// TRUTHLY 
console.log(Boolean("ABC")); //string
console.log(Boolean(" ")); //spasi
console.log(Boolean(12)); //angka
console.log(Boolean(-1));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

//2. Comparison operator : >, <, >=, <=, ==, ===
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueA >= 12);
console.log(valueB <= 14);
console.log(valueB != 14); // symbol tidak sama dengan
console.log(valueB == 15);
// == mencocokkan nilai berdasarkan nilainya saja
// console.log(valueB === "15") false
// === mencocokkan nilai berdasarkan tipe data dan nilai (lebih disarankan untuk practice)

// 3. Logical Operator : AND (&&), OR (||), NOT (!)
// AND : akan menghasilkan nilai TRUE jika antar nilai juga bernilai true
console.log(Boolean("ABC") && Boolean(2));
console.log(valueA < 12 && valueB === 15);
console.log(valueA === 10 && valueB === 1);

// OR : akan menghasilkan nilai TRUE jika salah satu data bernilai true
console.log(Boolean("ABC") || Boolean(2));
console.log(valueA < 12 || valueB === 15);
console.log(valueA === 10 || valueB === 1);

// NOT : membalikkan nilai, untuk negasi, memaksa true or false
console.log(!Boolean(valueA));
console.log(!(valueA < 12) && valueB === 15);
