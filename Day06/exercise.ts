/*
Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */
// input
const mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2];
function totalNumber(mixedArray: any[]): number {
  let total: number = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    const element = mixedArray[i];
    // cek angka
    if (typeof element === "number" && !isNaN(element)) {
      total += element;
    }
  }
  return total;
}
console.log(totalNumber(mixedArray));

/* 
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
1. 2. 3. maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/
const data: number[] = [5, 10, 24, 3, 6, 7, 8]
function insertToArray(maxSize: number, ...integers: number[]): number[] {
  return integers.slice(0, maxSize);
}
console.log(insertToArray(data, 5));

/*
Write a function that will combine 2 given array into one array
b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
let combine: number[] = [];
function combineArray(arr1: number[], arr2: number[]) {
  combine = arr1.concat(arr2); // RUMUS COMBINE ARRAY

  return combine;
}
console.log(combineArray(arr1, arr2));

// cara 2
const combine1: number[] = [...arr1, ...arr2];
console.log(combine1);

/* 
Write a function to find duplicate values in an array
b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/
const array: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const uniqueElements = new Set();
const duplicate = new Set(); // pake Set untuk menghindari duplikasi berkali-kali

array.forEach((item) => {
  if (uniqueElements.has(item)) {
    duplicate.add(item);
  } else {
    uniqueElements.add(item);
  }
});
console.log(...duplicate);

/*
Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/
const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [3, 4, 5, 6, 7];
const difference1 = array1.filter((x) => !array2.includes(x));
const difference2 = array2.filter((x) => !array1.includes(x));
const combineDiff = [...difference1, ...difference2];

console.log(combineDiff);
