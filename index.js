// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Array</h1>`;

// Holds collection of values
// can contain mix data types
// are resizable(do not have to declare size before creating)
// are zero-indexed and insertion order is maintained
// are iterables. can be used with for of loop

// Time Complexity
// Insert/remove from end - O(1)
// Insert/remove from start - O(n)
// Access - O(1)
// Search - O(n)
// Push/pop - O(1)
// Shift/unshift/concat/slice/splice - O(n)
// forEach/map/filter/reduce - O(n)

const arr = [1, 2, 3, 4];

arr.push(5); // add at end (1 2 3 4 5)
arr.pop(); // remove at end (1 2 3 4)
arr.unshift(0); // add at start (0 1 2 3 4)
arr.shift(); // remove at start (1 2 3 4)

// for (const item of arr) console.log(item); // iterate through array

// for (let i = 0; i < arr.length; i++) console.log(arr[i]); // iterate through array

const fruits = [];
fruits.push('banana', 'apple', 'peach');

// console.log(Object.keys(fruits)) // ["0", "1", "2"]
// console.log(Object.values(fruits)) // ["banana", "apple", "peach"]
// console.log(fruits[10]) // undefined

// concat - merge 2 or more arrays and returns new array
// console.log(arr.concat(fruits)); // [1, 2, 3, 4, …]
// console.log(fruits.concat(arr)); // ["banana", "apple", "peach", 1, …]
// console.log(arr.concat(fruits, ['i', 'ii', 'iii', 'iv'])); // [1, 2, 3, 4, …]

// every - tests whether all elements in array passs the test and return boolean
// console.log(arr.every((number)=>number<5)) // [1, 2, 3, 4] true
// console.log(arr.every((number)=>number>2)) // [1, 2, 3, 4] false

// filter - returns new array of elments that pass the test
// console.log(arr.filter((number)=>number >2)) // [3, 4]
// console.log(arr) // [1, 2, 3, 4]

// flat - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log([0, 1, [2, 3]].flat()) // [0, 1, 2, 3]
// console.log([0, 1, [[2, 3]]].flat()) // [0, 1, Array[2]]
// console.log([0, 1, [[2, 3]]].flat(2)) // [0, 1, 2, 3]
// console.log([0, 1, [[[2, 3]]]].flat(3)) // [0, 1, 2, 3]
// console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity)) // [0, 1, 2, 3, …]

// Flatten an array
// const flatten = (arr) => {
//   let final = [];
//   arr.forEach((item) => {
//     if (!Array.isArray(item)) {
//       final.push(item);
//     } else {
//       final.push(...flatten(item));
//     }
//   });
//   return final;
// };
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// faltMap - map follwed by flat(1) - e.g remove -ve number or empty string and convert odd no. to even + 1
// console.log([5, 4, -1, '', 33, , 7]); // [5, 4, -1, "", 33, undefined, 7]
// console.log(
//   [5, 4, -1, '', 33, , 7].flatMap((item) => {
//     if (item < 0) return [];
//     return item % 2 === 0 ? [item] : [item - 1, 1];
//   })
// ); // [4, 1, 4, "", 32, 1, 6, 1]

// forEach - executes provided function once for each array element
// console.log(arr.forEach((number) => console.log(number)));

// An Object copy function - creates a copy of a given object
// const obj1 = { a: 1, b: 2 };
// console.log(obj1);
// const copy = (obj) => {
//   const copy = Object.create(Object.getPrototypeOf(obj));
//   const propsName = Object.getOwnPropertyNames(obj);
//   propsName.forEach((name) => {
//     const desc = Object.getOwnPropertyDescriptor(obj, name);
//     Object.defineProperty(copy, name, desc);
//   });
//   return copy;
// };
// const obj2 = copy(obj1);
// console.log(obj2);

// indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('giraffe'));

// Finding all the occurrences of an element
// const findAllOccurances = (arr, t) => {
//   const indices = [];
//   let idx = arr.indexOf(t);
//   while (idx !== -1) {
//     indices.push(idx);
//     idx = arr.indexOf(t, idx + 1);
//   }
//   console.log(indices);
//   return indices;
// };

// const arr1 = ['a', 'b', 'a', 'c', 'a', 'd'];
// const target = 'a';
// console.log(findAllOccurances(arr1, target));
