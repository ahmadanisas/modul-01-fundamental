/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
// input
const arr: number[] = [12, 5, 23, 18, 4, 45, 32];
let total: number = 0;
// process
let ans: string = "";
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
const average: number = total / arr.length;
const lowest: number = Math.min(...arr);
const highest: number = Math.max(...arr);
// output
console.log(`lowest : ${lowest}, highest : ${highest}, average : ${average}`);

/*
2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/
// input
const arr2: string[] = ["apple", "banana", "cherry", "date"];
// process
const string: string =
  arr2.slice(0, -1).join(", ") + " and " + arr2[arr2.length - 1];
// output
console.log(string);

/*
3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
// input
const numbers: number[] = [5, 3, 1, 7, 2, 6];
// process
function secondSmallest() {
  const sort = numbers.sort();
  return sort[1];
}
// output
console.log(secondSmallest());

/*
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
// input
const array1: number[] = [1, 2, 3];
const array2: number[] = [3, 2, 1];
// process
const sumResult: number[] = [];
function sumArray() {
  for (let i = 0; i < array1.length; i++) {
    sumResult.push(array1[i] + array2[i]);
  }
  return sumResult;
}
// output
console.log(sumArray());

/* 
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4]
→ [1, 2, 3, 4, 7]
*/
// input
const arr3: number[] = [1, 2, 3, 4];
// process
function cekArray(newElement: number) {
  if (!arr.includes(newElement)) {
    arr3.push(newElement);
  }
  return arr3;
}
// output
console.log(cekArray(4));
console.log(cekArray(7));
