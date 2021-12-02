const secondHand = document.getElementById("second_hand");
const minsHand = document.getElementById("min_hand");
const hourHand = document.getElementById("hour_hand");

const secondHand2 = document.getElementById("second_hand_2");
const minsHand2 = document.getElementById("min_hand_2");
const hourHand2 = document.getElementById("hour_hand_2");

const secondHand3 = document.getElementById("second_hand_3");
const minsHand3 = document.getElementById("min_hand_3");
const hourHand3 = document.getElementById("hour_hand_3");

// function setClock(now, secondHand, minsHand, hourHand) {
function setClock() {

  const now = new Date();
  
  //New York
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //90 deg
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  /* offset van elke wijzer graden wordt berekend (seconden/60s)*360 + 90 
  Waarom + 90 graden? Omdat in css heb ik transform rotate(90deg)
  anders de startpositie van deze wijzer is 9, niet 12! */

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90 - 180;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (seconds == 0) {
    secondHand.style.transitionDuration = "0s";
  } else {
    secondHand.style.transitionDuration = ".1s";
  }

  if (mins == 0) {
    minsHand.style.transitionDuration = "0s";
  } else {
    minsHand.style.transitionDuration = ".05s";
  }

  if (hour == 0) {
    hourHand.transitionDuration = "0s";
  } else {
    hourHand.transitionDuration = ".05s";
  }

  //Amsterdam

  const seconds2 = now.getSeconds()
  const secondsDegrees2 = (seconds2 / 60) * 360 + 90;
  secondHand2.style.transform = `rotate(${secondsDegrees2}deg)`;

  const mins2 = now.getMinutes()
  const minsDegrees2 = (mins2 / 60) * 360 + (seconds2 / 60) * 6 + 90;
  minsHand2.style.transform = `rotate(${minsDegrees2}deg)`;

  const hour2 = now.getHours()
  const hourDegrees2 = (hour2 / 12) * 360 + (mins2 / 60) * 30 + 90;
  hourHand2.style.transform = `rotate(${hourDegrees2}deg)`;

  if (seconds2 == 0) {
    secondHand2.style.transitionDuration = "0s";
  } else {
    secondHand2.style.transitionDuration = ".1s";
  }

  if (mins2 == 0) {
    minsHand2.style.transitionDuration = "0s";
  } else {
    minsHand2.style.transitionDuration = ".05s";
  }

  if (hour == 0) {
    hourHand2.transitionDuration = "0s";
  } else {
    hourHand2.transitionDuration = ".05s";
  }

//Tokyo

  const seconds3 = now.getSeconds();
  const secondsDegrees3 = (seconds3 / 60) * 360 + 90;
  secondHand3.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins3 = now.getMinutes();
  const minsDegrees3 = (mins3 / 60) * 360 + (seconds3 / 60) * 6 + 90;
  minsHand3.style.transform = `rotate(${minsDegrees}deg)`;

  const hour3 = now.getHours();
  const hourDegrees3 = (hour3 / 12) * 360 + (mins3 / 60) * 30 + 330;
  hourHand3.style.transform = `rotate(${hourDegrees3}deg)`;

  if (seconds3 == 0) {
    secondHand3.style.transitionDuration = "0s";
  } else {
    secondHand3.style.transitionDuration = ".1s";
  }

  if (mins3 == 0) {
    minsHand3.style.transitionDuration = "0s";
  } else {
    minsHand3.style.transitionDuration = ".05s";
  }

  if (hour3 == 0) {
    hourHand3.transitionDuration = "0s";
  } else {
    hourHand3.transitionDuration = ".05s";
  }
}
setInterval(setClock, 1000);

setClock();

// function updateClocks() {
//   const now1 = new Date();
//   const now2 = new Date();
//   now2.setHours(now1.getHours() - 6);
//   const now3 = new Date();
//   now3.setHours(now1.getHours() + 6);

//   setClock(now1, secondHand, hourHand, minsHand);
//   setClock(now2, secondHand2, hourHand2, minsHand2);
//   setClock(now3, secondHand3, hourHand3, minsHand3);
// }

/*******************/

//getSeconds(), getMinutes(), getHours() - methodes geven de seconden, minuten en uren in de opgegeven datum terug volgens de lokale tijd.

//how to turn seconds into degrees???
//at 0 = 0deg 100% = 360deg
//(seconds / 60) = % als seconds = 60 / 60 = 1 * 360deg
//(seconds / 60) * 360

