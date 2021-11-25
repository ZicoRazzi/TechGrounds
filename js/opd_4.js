/***** Functions *****/
/*** Opdracht 4.1 ***/

//a
document.querySelector('button').addEventListener('click', function() {
  console.log('Tralalalala')
})

//b
let nameInput = document.getElementById('input')

document.querySelector('input').addEventListener('focus', function(e) {
  e.preventDefault();

  console.log(nameInput.value)
})
function logElement (element) {
  console.log(element)
}
const inputData = document.getElementById('input')
logElement(inputData)

// //c
// const inputData2 = document.getElementById('input')
// function inputLog() {

//   console.log(parameter.value)
// }
// inputLog(inputData2)

const printMessage = () => { 
  console.log('this is a message!'); 
}; 
printMessage();

//d
function returnExample () {
  let str = 'Hello from Javascript'
  return str
}

let response = returnExample()
console.log(response)

let res = result(13, 47)
function result (x, y) {
  return x * y 
}

console.log(res)

function cars (number) {
  if (number === 1) {
    return "Audi"
  } else {
    return "Polestar"
  }
}

let car = cars(3)
console.log(car)

/*** Opdracht 4.2 ***/

//a
//I
const p = document.getElementsByClassName('paragraph')[1].style.backgroundColor = 'yellow'
//II

document.getElementsByTagName('li')[2].style.color = 'green'
//III
// const body = document.querySelector('body').addEventListener('click', function() {
//   alert ('it was clicked!')
// })

//IV
let ulList = document.getElementById('test')

ulList.addEventListener('mouseover', function (e) {
  e.target.style.color = 'red'

  setTimeout(function() {
    e.target.style.color = "";
  }, 500)
}, false)

// document.querySelector('.btn').addEventListener('click', function() {
//   bgColor = document.querySelectorAll('.item')
//   this.style.backgroundColor = "orange"
  
// })

// function changeBg () {
//   let bgColor, i
//   bgColor = document.querySelectorAll('.item')
//   for (i = 0; i < bgColor.length; i++) {
//     bgColor[i].style.backgroundColor = 'orange'
//     console.log(bgColor)
//   }
// }

//V
const inner = document.getElementById('inner')
inner.innerHTML = '<li>this is a list</li>' 

document.getElementById('title').innerHTML = 'we have changed the title name!'

//VI

document.querySelector('button').addEventListener('click', function() {
  getInnerText ()
  
})
function getInnerText () {
  const text = document.getElementById('first_paragraph').innerText
  document.getElementById('new_paragraph').innerHTML = text
}