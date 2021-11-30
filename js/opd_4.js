/***** Functions *****/
/*** Opdracht 4.1 ***/

//a
document.querySelector('.btn1').addEventListener('click', function() {
  console.log('Tralalalala')
})

//b
let nameInput = document.getElementById('input')

document.querySelector('input').addEventListener('focus', function(e) {
  e.preventDefault();

  console.log(nameInput.value)
})



//c


/***/
const printMessage = () => { 
  console.log('this is a message!'); 
}; 
printMessage();


const input2 = document.getElementById('input')
input2.onchange = function() {
   console.log(input2.value)
};


// bonus

const carYear = 2015
const personYear = 1974

function calculateAge(year) {
  let currentYear = 2021
  let result = currentYear - year
  return result
}

function checkAndLogAge(year) {
  if (calculateAge(year) < 10) {
    console.log('Age is younger than 10 years')
  } else {
    console.log('Age is older than 10 years')
  }
}
 checkAndLogAge(carYear)
 checkAndLogAge(personYear)


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

const listOfParagraphs = document.querySelectorAll('p')

for (let index = 0; index < listOfParagraphs.length; index++) {
  const element = listOfParagraphs[index];
  element.addEventListener('click', function() {
    element.classList.add('new_style')
  })
}


let ulList = document.getElementById('test')

ulList.addEventListener('mouseover', function (e) {
  e.target.style.color = 'red'

  setTimeout(function() {
    e.target.style.color = "";
  }, 500)
}, false)



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

//b
const input = document.getElementById('input')
input.oninput = function() {
   console.log(input.value)

};




/*** Opdracht 4.3 ***/

//a

const btn = document.querySelector('.btn2')
function randomNumber(min, max) {
  
  const result = Math.floor(Math.random() * (max - min)) + min

  btn.addEventListener('click', function() {
    return console.log(result)
  })
}

randomNumber(1, 12)

//b

function getRandomInt(m) {
  return Math.floor(Math.random() * m);
}
console.log(getRandomInt(100))

//c

function rnd(min,max){
  return Math.floor(Math.random()*(max-min+1)+min );
}
console.log(rnd(0, 6))


/*** Opdracht 4.4 ***/

//a
//option 1

// const checkName = function (inputName) {
  
//   if (
//     inputName == 'Alfi' ||
//     inputName == 'Fatos' ||
//     inputName == 'Michael' ||
//     inputName == 'Haydar' ||
//     inputName == 'Zico'
//   ) {
  
//     console.log('this is your team member')
//   } else {
//     console.log('Sorry, this person is not from your team');
    
//   }
// };
// checkName('Zico')
// checkName('Kiki')
// checkName('Ron')
// checkName('Alfi')

//option2

const checkName = log => {
  log = document.querySelector('#input2').value
  console.log(log)
  switch (log) {
    case 'Alfi':
    console.log('this is your team member!')
    return `${'this is your team member!'}`
    case 'Fatos':
    console.log('this is your team member!')
    return `${'this is your team member!'}`
    case 'Michael':
    console.log('this is your team member!')
    return `${'this is your team member!'}`
    case 'Zico':
    console.log('this is your team member!')
    return `${'this is your team member!'}`
    
    default: console.log('sorry do not trust this person')
    return 'sorry do not trust this person'
  }
}
const btn3 = document.querySelector('.btn3').addEventListener('click', () => {
      checkName()
    })
    


//a+b another option

//option 1

//const names = ['Alfi', 'Fatos', 'Michael', 'Haydar', 'Zico']
        
// function checkName2() {
//     let inputName3 = document.querySelector('#input2').value
//     const teamNames = names.map(function (name) {
//       return name.toUpperCase()})
//     let checkedNames = inputName3.toUpperCase()
    
    
//     if (teamNames.includes(checkedNames) === true) {
//         document.querySelector('.team_member').innerHTML = 'This is your team member'
//     }
//     else {
//       document.querySelector('.team_member').innerHTML = 'Sorry, this person is not from your team'
//     }
// }

// const btn3 = document.querySelector('.btn3').addEventListener('click', () => {
//   checkName2()
// })



//option 2

// let checkName2 = () => {
//   let inputName3 = document.querySelector('#input2').value
//   const teamNames = names.map(name => name.toUpperCase()); //als je gebruik toUpperCase() mag de namen met de kleine letters typen
//   let checkedNames = inputName3.toUpperCase()

//   teamNames.includes(checkedNames) === true ? document.querySelector('.team_member').innerHTML = 'this is your team member' : document.querySelector('.team_member').innerHTML = 'Sorry, this person is not from your team'
// }

//   const btn3 = document.querySelector('.btn3').addEventListener('click', () => {
//     checkName2()
//   })
  

// const showName = function (name) {
//   const inputInfo = checkName(name)
//   const inputSpan = document.querySelector('.team_member')
//   inputSpan.innerHTML = inputInfo
  
  
// }

// showName('Alfi')

//c
// const showName2 = name => {
//   const inputInfo = checkName(name)
//   const inputSpan = document.querySelector('.team_member')
//   inputSpan.innerHTML = inputInfo
// }

// showName2('Fatos')

//bonus 
/*I’ve declared a very simple class, and a very simple function. However, the function does not accept arguments, instead, it directly references 2 properties within its execution context. The problem? The properties have never been defined in the function’s particular context. They are part of the class though.

So by using the call method that every function has, you can call it by overwriting its context. Thus allowing this external function to act as a method of the Person class.*/

class Person {
  constructor(first_name, last_name) {
    this.f_name = first_name;
    this.l_name = last_name;
  }

}
function greetPerson() {
  console.log("Hello there ", this.f_name, this.l_name);
}

let oPerson1 = new Person("Zico", "Razzi");
let oPerson2 = new Person("Anna", "Valente");


greetPerson.call(oPerson1);
greetPerson.call(oPerson2);