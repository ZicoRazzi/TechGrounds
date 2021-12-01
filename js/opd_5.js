/***** Arrays & Loops *****/
/*** Opdracht 5.1 ***/

//a
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
//b
const fruits = ["appel", "aardbei", "kiwi", "pruim", "ananas"];
console.log(fruits);
//c
console.log(fruits[0], fruits[1]);

//d
// option 1
// const getRandomInd = () => {
//   const fruitsLength = fruits.length
//   const randomInd = Math.floor(Math.random() * fruitsLength)
//   return randomInd
//   console.log(randomInd)

// }
// option 2

//d+e+f
const getRandomIndex = () => {
  // const fruitsLength = fruits.length
  let randomIndex = Math.floor(Math.random() * 100);
  // let randomFruit = randomInd
  let randomFruit = randomIndex % fruits.length;
  document.querySelector("span").innerHTML = fruits[randomFruit];
};
document.querySelector("button").addEventListener("click", () => {
  getRandomIndex();

  // optie 2

  // const getRandomInd = () => {
  //   const fruitsLength = fruits.length;
  //   let randomInd = Math.floor(Math.random() * fruitsLength);
  //   let randomFruit = randomInd;

  //   document.querySelector("span").innerHTML = fruits[randomFruit];
  // };
  // document.querySelector("button").addEventListener("click", () => {
  //   getRandomInd();
  // });
});
fruits.push("banaan", "kersen", "persik");
console.log(fruits.length);
fruits[0] = "peer";
console.log(fruits);

//h
//option 1
function swapIndex(fromIndex, toIndex, elements) {
  const itemIndex = elements.indexOf(fromIndex);
  const destIndex = elements.indexOf(toIndex);
  if (itemIndex >= -1 && destIndex > -1) {
    elements.splice(destIndex, 0, elements.splice(itemIndex, 1)[0]);
  }
  return elements;
}
console.log("Init: ", fruits);
let result = swapIndex("peer", "aardbei", fruits);
console.log("After swap: ", result);

//option 2
//...

/*** Opdracht 5.2 ***/

//a
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

for (let i = 0; i < dutchSports.length; i++) {
  console.log(dutchSports[i]);
}

//b

for (const index in dutchSports) {
  console.log(dutchSports[index]);
}

for (const item of dutchSports) {
  console.log(item);
}

//c
var i;
for (i = 2; i <= 20; i++, i++) {
  console.log(i);
}

// another option
const numbers2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let evenNumbers = numbers2.filter((item) => item % 2 === 0);
console.log(evenNumbers);

//d+e+f

// for (let i = 1; i <= 10; i++) {
//   console.log(i);

//   for (let y = 1; y <= 20; y++) {
//     console.log(y);
//   }
//   for (let x = 1; x <= 30; x++) {
//     console.log(x);
//   }
// }

//g
let fibonacci = [0, 1];

for (let i = 2; i < 50; ++i) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

console.log(fibonacci);

//h

function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547, 99, 13, -3, 41];

// Now pass this array to the bblSort() function
bblSort(arr);

//h - another option

function sortItems(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

let numbersToSort = [16, 11, 2, 13, 8, 7];
let sortedList = sortItems(numbersToSort);
console.log(sortedList);

/*** Opdracht 5.3 ***/

//a
dutchSports.push("Zeilen", "Zwemmen");
console.log(dutchSports);
//b
dutchSports.unshift("Volleybal");
console.log(dutchSports);
//c
const ballSports = dutchSports.slice(0, 3);
console.log(ballSports);
//d
dutchSports.splice(0, 3);
console.log(dutchSports);
//e
dutchSports.sort();
console.log(dutchSports);
ballSports.sort();
console.log(ballSports);
//f
for (let item of dutchSports) {
  console.log(item);
}
for (let item of ballSports) {
  console.log(item);
}
//g
const sportsLength = dutchSports.map((item) => item.length);
console.log(sportsLength);

/*** Opdracht 5.3 ***/
//a
let arrayLike = document.querySelector("div");
console.log(arrayLike);
const newArray = Array.from(arrayLike);
console.log(newArray);

//b
const words = [
  "exhibitionist",
  "parasite",
  "vulgarism",
  "provocation",
  "pseudonym",
  "predator",
];

const result3 = words.filter((word) => word.length > 8);

console.log(result3);

//c
const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 20);

console.log(found);

//d
const array3 = [11, 2, 13, 7, 16];

const even = (element) => element % 2 === 0;

console.log(array3.some(even));

//e
const isBelowThreshold = (currentValue) => currentValue < 50;

const array4 = [11, 30, 39, 29, 100, 113];

console.log(array4.every(isBelowThreshold));

//f
const array1 = [1, 2, 3];

console.log(array1.includes(2));

const pets = ["cat", "dog", "mouse"];

console.log(pets.includes("mouse"));

console.log(pets.includes("at"));
