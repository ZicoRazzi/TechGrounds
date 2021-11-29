/***** Objects *****/
/*** Opdracht 6.1 ***/

//intro

//object constructor

let person = new Object()

person.name = 'Zico'
person.age = 47
person.country = 'Netherlands'
person.city = 'Amsterdam'
person.job = 'Front End Developer'

console.log(person)

//literal object

let person2 = {
  name : 'Zico',
  age : 47,
  country : 'Netherlands',
  city : 'Amsterdam',
  job : 'Front End Developer'
}

console.log(person2)

//function constructor

function Person(name, age, country, city, job) {
  this.name = name
  this.age = age
  this.country = country
  this.city = city
  this.job = job
}

let person3 = new Person('Zico', 47, 'Netherlands', 'Amsterdam', 'Front End Developer')

console.log(person3)

//singleton constructor

let person4 = new function() {
  this.name = 'Zico'
    this.age = 47
    this.country = 'Netherlands'
    this.city = 'Amsterdam'
    this.job = 'Front End Developer'
}

console.log(person4)

//class-based constructor 
  
class Person2 {
  constructor(name, age, country, city, job) {
    this.name = 'Zico'
    this.age = 47
    this.country = 'Netherlands'
    this.city = 'Amsterdam'
    this.job = 'Front End Developer'
  }
}

let person5 = new Person2('Zico', 47, 'Netherlands', 'Amsterdam', 'Front End Developer')

console.log(person5)

//a

const dog = {
  species: 'dog',
  breed: 'labradoodle',
  name: 'Loco',
  age: 3
};

let cat = new Object();
cat.species = 'cat'
cat.name = 'Matilda'
cat.age = 12

function Tiger(species, name, country) {
  this.species = species
  this.name = name
  this.country = country
}
let tiger = new Tiger('tiger', 'Tito', 'Rusland')

let lion = new (function () {
  this.species = 'lion'
  this.name = 'King'
  this.country = 'Namibia'
})

class Elephant {
  constructor(species, name, age) {
    this.species = 'elephant'
    this.name = 'Dora'
    this.age = 33
  }
}
let elephant = new Elephant();

console.log(dog)
console.log(cat)
console.log(tiger)
console.log(lion)
console.log(elephant)
//b

const jaguar = Object.create(tiger)
jaguar.species = 'panter'
jaguar.name = 'Balou'
jaguar.country = 'Paraguay'


console.log(jaguar)

const panter = Object.create(cat)
panter.species = 'panter'
panter.name = 'Lola'
panter.age = 2
console.log(panter)

//c

const team = [
  {name: 'Gianluigi', age: 22},
  {name: 'Giorgio', age: 37},
  {name: 'Leonardo', age: 28},
  {name: 'Manuel', age: 23},
  {name: 'Marco', age: 29},
  {name: 'Nicolo', age: 24}, 
  {name: 'Federico', age: 27},
  {name: 'Andrea', age: 25},
  {name: 'Lorenzo', age: 30},
  {name: 'Domenico', age: 26},
  {name: 'Ciro', age: 31}
]

team.sort( (a, b) => a.age - b.age)

console.log(team)


/*** Opdracht 6.2 ***/

function Club (name, type, division, followers, contactDetails) {
   
    this.name = name
    this.type = type
    this.division = division
    this.followers = followers
    this.contactDetails = {
      address: 'Via Druento, 175 10151 Torino',
      phone: '(+39) 011.45.30.486.',
      contactPerson: 'Alessandro Del Piero'
    } 
      
    
  
}
let juventus = new Club ('juventus', 'football club', 'seria A', 450000000, 'Via Druento, 175 10151 Torino (+39) 011.45.30.486. Alessandro Del Piero')

console.log(juventus)

const chelsea = {
  name: 'chelsea',
  type: 'football club',
  division: 'premier league',
  followers: 75000000,
  contactDetails: {
    address: 'Fulham Road, SW6 1HS London',
    phone: '+44 2034 793565',
    contactPerson: 'Roman Abramovich'
  }
}

console.log(chelsea)
