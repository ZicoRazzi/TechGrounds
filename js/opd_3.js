/***** Conditions *****/
/*** Opdracht 1 ***/

let x = 4;
let y = 8;
if (x === 4 && y === 8) {
  console.log("Result!");
}

let x1 = 4;
let y1 = 8;
if (x1 === 4 || y1 === 8) {
  console.log("Result!");
}
//check this exs
let x2 = 4;
let y2 = 8;
if (!(x2 == 4 || y2 == 8)) {
  console.log("Result!");
} else {
  console.log("Not Result!");
}

let x3 = 4;
let y3 = 8;
if (x3 === 4 && y3 === 8) {
  console.log("Result!");
} else {
  console.log("Not Results!");
}

let x4 = 43

if(x4 > 5 && x4 < 10) {
  console.log('you are between 6 - 9')
} else if (x4 >= 11 && x4 <= 20){
  console.log('you are between 11 - 20')
} else if (x4 === 21 || x4 === 23) {
  console.log('you are on 21 or 23')
} else if (x4 < 35 || 40 < x4 < 45) {
  console.log('you are lower than 35, or you are between 40 and 45')
} else {
  console.log ('you are somewhere else')
}
/*** Opdracht 2 ***/

let z = 13;

if (z) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z1 = 13;

if (z1 === 3) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z2 = 13;

if (z2 > 4) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z3 = 13;

if (z3 > 3) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z4 = 13;

if (z4 < 3) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z5 = 13;

if (z5 >= 2) {
  console.log("Correct!");
} else {
  console.log("Not correct");
}

let z6 = 40;

if (z6 === 3) {
  console.log("is gelijk aan 3");
} else if (z6 > 4) {
  console.log("groter dan 4");
} else if (z6 > 11) {
  console.log("groter dan 11");
} else if (z6 < 3) {
  console.log("kleiner dan 3");
} else if (z6 < 20) {
  console.log("kleiner dan 20");
} else {
  console.log("...");
}

let month = 1

if (month == 1) {
  console.log('January')
} else if (month == 2 ) {
  console.log('February')
} else if (month == 3 ) {
  console.log('March')
} else if (month == 4 ) {
  console.log('April')
} else if (month == 5 ) {
  console.log('May')
} else if (month == 6 ) {
  console.log('June')
} else if (month == 7 ) {
  console.log('July')
} else if (month == 8 ) {
  console.log('August')
} else if (month == 9 ) {
  console.log('September')
} else if (month == 10 ) {
  console.log('October')
} else if (month == 11 ) {
  console.log('November')
} else if (month == 12 ) {
  console.log('December')
} else ('does not exist')

let m = 103
switch (m) {
  case 0: maand = 'January';
  console.log('January')
  break;
  case 1: maand = 'February';
  console.log('February')
  break;
  case 2: maand = 'March';
  console.log('March')
  break;
  case 3: maand = 'April';
  console.log('April')
  break;
  case 4: maand = 'May';
  console.log('May')
  break;
  case 5: maand = 'June';
  console.log('June')
  break;
  case 6: maand = 'July';
  console.log('July')
  break;
  case 7: maand = 'August';
  console.log('August')
  break;
  case 8: maand = 'September';
  console.log('September')
  break;
  case 9: maand = 'October';
  console.log('October')
  break;
  case 10: maand = 'November';
  console.log('November')
  break;
  case 11: maand = 'December';
  console.log('December')
  break;
  default:
    console.log('does not exist');

}

 let x10 = 7
// let results
// if(x10<=4 && x10>=0) {
//   result = 2
// } else {
//   result = 5
// }
// console.log(results)

x10 <=4 && x10 >= 0 ? results = 2 : results = 5;
console.log (results)