const newYear = "01 Jan 2024";

const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector("#hours")
const minsEl = document.querySelector('#mins')
const secsEl = document.querySelector('#seconds')

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  
  const totalSeconds = Math.floor((newYearDate - currentDate) / 1000)
  seconds = totalSeconds % (60)
  const minutes = Math.floor(totalSeconds / 60) % (60)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const days = Math.floor(totalSeconds / 3600 / 24)

  daysEl.innerHTML = formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(minutes)
  secsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

// initial call
countdown()
setInterval(countdown, 1000)