function updateTime() {
  const hourEl = document.querySelector('#hour')
  const minuteEl = document.querySelector('#minute')
  const secondEl = document.querySelector('#second')

  let data = new Date()
  let hours = data.getHours()
  let minutes = data.getMinutes()
  let seconds = data.getSeconds()

  if (hours >= 0 && hours <= 9) hours = '0' + hours
  if (minutes >= 0 && minutes <= 9) minutes = '0' + minutes
  if (seconds >= 0 && seconds <= 9) seconds = '0' + seconds
  hourEl.innerHTML = hours
  minuteEl.innerHTML = minutes
  secondEl.innerHTML = seconds

  const dateEl = document.querySelector('#date')
  let date = data.getDate()
  if(date >= 0 && date <= 9) date = '0' + date
  let month = data.getMonth()
  if(month >= 0 && month <= 9) month = '0' + month
  let year = data.getFullYear()
  if(year >= 0 && year <= 9) year = '0' + year
  dateEl.innerHTML = `${date + '-'}${month + '-'}${year}`

  const dayEl = document.querySelector('#day')
  let dayNumber = data.getDay()
  let day = ''

  switch(dayNumber) {
    case 0: day = 'Sunday'; break
    case 1: day = 'Monday'; break
    case 2: day = 'Tuesday'; break
    case 3: day = 'Wednesday'; break
    case 4: day = 'Thursday'; break
    case 5: day = 'Friday'; break
    case 6: day = 'Saturday'; break

  }
  dayEl.innerHTML = day

}

onload = () => setInterval(updateTime, 1000)