/* 1. Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/
// data
let rectangleLength: number = 5;
let rectangleWidth: number = 3;
// rumus
let rectangleArea: number = rectangleLength * rectangleWidth;
// hasil
console.log(rectangleArea); 


/* 2. Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/
// data
rectangleLength = 5;
rectangleWidth = 3;
// rumus
const rectanglePerimeter: number = 2 * (rectangleLength + rectangleWidth);
// hasil
console.log(rectanglePerimeter);


/* 3. Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
// diameter
let circleRadius = 5;
const circleDiameter = 2 * circleRadius;
console.log(circleDiameter);
// circumference
const circleCircumference: number = Math.PI * circleDiameter
console.log(circleCircumference);
// area
const circleArea: number = Math.PI * circleRadius * circleRadius
console.log(circleArea);


/* 4. Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/
// data
let angleA: number = 80;
let angleB: number = 65;
// rumus
const angleC: number = 180 - angleA - angleB;
// hasil
console.log(angleC);


/* 5. Write a code to convert temperature from Celsius to Fahrenheit.
• Example: celsius = 25
• Output: 77
*/
let Celsius: number = 25;
const CelciustoFahrenheit: number = 9/5 * Celsius + 32;
console.log(CelciustoFahrenheit);


/* 6. Write a code to swap two numbers.
• Example: a = 4, b = 7
• Output: a = 7, b = 4
*/
let a: number = 4;
let b: number = 7;
let temp: number;
// a disimpan dulu di temp
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
let printInfoNumber: string = "a = " + a + "," + " " + "b = " + b
console.log(printInfoNumber)


/* 7. Write a code to get first and last character from a string.
• Example: word = "Programming"
• Output: P and g
*/
const Word: string = "Programming";
// 1. index string dimulai dari 0 dan menggunakan []
const firstChar: string = Word.charAt(0); //array dengan rumus Word[0]
// 2, karena index dimulai dari 0, maka last character: Word.length - 1
const lastChar: string = Word.charAt(Word.length - 1); //array dengan rumus word[word.length - 1]
console.log(firstChar);
console.log(lastChar);

let printInfoChar: string = firstChar + " " + "&" + " " + lastChar
console.log(printInfoChar);


/* 8. Write a code to calculate the square and cube of a number.
• Example: number = 4
• Output: square = 16, cube = 64
*/
console.log(Math.pow(4, 2 ));
console.log(Math.pow(4, 3));

let printInfo01: string = Math.pow(4, 2) + " " + "&" + " " + Math.pow(4, 3);
console.log(printInfo01);


/* 9. Write a code to convert minutes to hours and minutes.
• Example: totalMinutes = 135
• Output: 2 hours and 15 minutes
*/
let totalMinutes = 135;
// jam dibulatkan ke bawah 
const Hours: number = Math.floor (totalMinutes / 60);
// sisa menit = total menit - total jam dalam menit
let Minutes: number = 135 - (60 * Hours)
console.log(Hours);
console.log(Minutes);
//bisa pakai modulus, modulus itu habis bagi terus ada sisanya atau engga

let printInfo = Hours + " " + "hours" + " " + Minutes + " " + "minutes"
console.log(printInfo);