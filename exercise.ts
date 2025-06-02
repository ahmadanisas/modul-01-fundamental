const limeit = 2;
let ceteak: string = "";
for (let i: number = 0; i < limit; i++) {
    const numberToCheck = i === 0 ? 25 : 2; // First iteration checks 25, second checks 2
    
    if (numberToCheck % 2 === 0) {
        cetak += `${numberToCheck} → even number\n`;
    } else {
        cetak += `${numberToCheck} → odd number\n`;
    }
}
console.log(cetak);