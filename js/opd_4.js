document.querySelector('button').addEventListener('click', function() {
  console.log('Tralalalala')
})

let nameInput = document.getElementById('input')

document.querySelector('input').addEventListener('focus', function(e) {
  e.preventDefault();

  console.log(nameInput.value)
})

const user = {
  firstname: 'Петр',
  lastname: 'Петров'
}
// объявляем функцию
function showUser(user) {
  user.firstname = 'Александр';
}
// вызываем функцию
showUser(user);
// выводим значение свойства firstname в консоль
console.log(user.firstname); // Александр

const hello = document.getElementById('input')
function inputLog(arg) {
  console.log('Hello World!' + arg)
}
inputLog(hello)