/***** String Methodes *****/
/*** Opdracht ***/

let someKittens = 'De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen'

let someKittens2 = {
  zin1: 'De poes van de buurman heeft kittens gehad!',
  zin2: 'Hij vraagt of wij nog kittens willen',
}
console.log(someKittens2)

let zin1 = 'De poes van de buurman heeft kittens gehad!'
let zin2 = 'Hij vraagt of wij nog kittens willen'
console.log(zin1, zin2)

console.log(someKittens.toUpperCase())

let searchTerm = 'kittens'
let indexOfFirst = someKittens.indexOf(searchTerm)
console.log('De eerste index voor ' + searchTerm + ' is ' + indexOfFirst)


let indexOfLast = someKittens.lastIndexOf(searchTerm)
console.log('De laatste index voor ' + searchTerm + ' is ' + indexOfLast)

let firstIndex = 29

let lastIndex = 66

console.log('De letter op index ' + firstIndex + ' is ' + someKittens.charAt(firstIndex)) 
console.log('De letter op index ' + lastIndex + ' is ' + someKittens.charAt(lastIndex)) 

console.log(zin1.slice(3))
console.log(zin1.slice(6, 16))
console.log(zin1.slice(2, -2))
console.log(zin1.slice(5, 3)) //werkt niet

console.log(zin2.substring(3, 9))
console.log(zin2.substring(9, 3))
console.log(zin2.substring(-3, 9))
console.log(zin2.substring(-9, 3))
console.log(zin2.substring(0, 10))

let someKittens3 = 'Die nieuwe kittens zijn zo schattig!'
console.log(someKittens3.split(" "))
