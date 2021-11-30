const secondHand = document.querySelector(".second_hand");
const minsHand = document.querySelector(".min_hand");
const hourHand = document.querySelector(".hour_hand");

//console.log(secondHand, minsHand, hourHand)

function setDate() {
  const now = new Date(); //actual date/time

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //90 deg

  /*The offset of each pointer (seconds/60s)*360-90 degrees is calculated.
  Why - 90 degrees? Because if it is not - 90 degrees, 
  then the starting position of this pointer is not 12 points, but 3 points! */

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
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
  //getSeconds(), getMinutes(), getHours() - methodes geven de seconden, minuten en uren in de opgegeven datum terug volgens de lokale tijd.
}
setInterval(setDate, 1000);

setDate();
