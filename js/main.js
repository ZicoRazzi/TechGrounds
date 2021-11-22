/***** Variabeles and Datatypes *****/
/*** Opdracht 1 ***/
//a
let letOefening = 'Let tekst'
// let letOefening = 'let Tekst Twee!' //gebruik geen let voor dezelfde variabele, alleen de naam is voldoende
letOefening = 'let Tekst Twee!'
console.log(letOefening)

//b
let letOefening1 = 'Let tekst'
console.log(letOefening1)

letOefening1 = 'Let Tekst Twee!'
console.log(letOefening1)

//c
const constOefening = 'Const Tekst'
console.log(constOefening)

// constOefening = 'Const Tekst Twee!' // de waarde van const mag niet veranderen
// console.log(constOefening)

//d
varOefening2 = 'Var Tekst'
console.log(varOefening2)

var varOefening2 = 'Var Tekst Twee!'
console.log(varOefening2)

var varOefening2 = 'Var Tekst Drie!'
console.log(varOefening2)
//alle drie opties zijn mogelijk

/*** Opdracht 2 ***/

let typeQuestion = 'number'
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = true
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = false
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = undefined
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = 22
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = 22n
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
// typeQuestion = symbol() //symbol is not defined
// console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = null
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = {}
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = new Object()
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)
typeQuestion = function calculateSomething() {}
console.log('This is a ' + typeof typeQuestion + ', with the value: ' + typeQuestion)

/*** Opdracht 3 ***/

let someNumber = 5
let anotherNumber = '5'
console.log(someNumber + anotherNumber) //55
console.log(someNumber == anotherNumber) //true
console.log(someNumber === anotherNumber) //false
console.log(someNumber != anotherNumber) //false
console.log(someNumber !== anotherNumber) //true