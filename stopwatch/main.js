//Eerst zet ik de waarde van uur, minuut, seconde, milliseconde op nul

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let hoursDisplay = document.querySelector('.hours')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let millisDisplay = document.querySelector('.millis')
let int = null;

const startBtn = document
  .querySelector(".start")
  .addEventListener("click", () => {
    if (int !== null) {
      clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
  });

document.querySelector(".pause").addEventListener("click", () => {
  clearInterval(int);
});
document.querySelector(".reset").addEventListener("click", () => {
  clearInterval(int);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  
  hoursDisplay.innerHTML = '00'
  minutesDisplay.innerHTML = '00'
  secondsDisplay.innerHTML = '00'
  millisDisplay.innerHTML = '00'
});

function displayTimer() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  
  hoursDisplay.innerHTML = `${h}`
  minutesDisplay.innerHTML = `${m}`
  secondsDisplay.innerHTML = `${s}`
  millisDisplay.innerHTML = `${ms}`
}

function blinkColon() {
  const colon = document.querySelectorAll(".colon");

  for (i = 0; i < colon.length; i++) {
    const blinkColon = colon[i];
    blinkColon.classList.add("colon");
  }
}

blinkColon();
