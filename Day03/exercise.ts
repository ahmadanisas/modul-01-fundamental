/*
● Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
*/
let angka: number =  25;
if(angka % 2 === 0) {
    console.log(`${angka} → genap`);
} else {
    console.log(`${angka} → ganjil`);
}


/*
● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
*/
let angka2: number = 2;
let prima: string = "";
for(let i = 2; i <= angka2; i++) {
    if (angka2 % i === 0) {
        console.log(`${angka2} → angka prima`);
    } else {
        console.log(`${angka2} → bukan angka prima`);
    }
}


/*
● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
*/
let angka3: number = 3;
let hasil: number = 0;
let hitung: string = "";
for(let i = 1; i <= angka3; i++) {
    hasil += i
    if (i === angka3) {
        hitung += i;
    } else {
        hitung += i + "+"
    }
}
console.log(`${angka3} → ${hitung}=${hasil}`)


/*
● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
let angka4: number = 6;
let fact: number = 1;
for(let i = 1; i <= angka4; i++) {
    fact *= i;
}
console.log(fact)


/*
● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/
