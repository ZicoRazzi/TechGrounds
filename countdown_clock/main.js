let countdown;
const timeDisplay = document.querySelector('.display_time_left');
const endTime = document.querySelector('.display_end_time');
const buttons = document.querySelectorAll('[data-time]');
let int = null;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;

  document.title = display;
  timeDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const adjustedHour = hours > 12 ? hours - 12 : hours;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
timeDisplay.addEventListener('click', () => {
  clearInterval(int);
  console.log(int);
});
