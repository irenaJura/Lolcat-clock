const clock = document.querySelector("#clock");

// set up clock
function updateTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  clock.innerText = `${hour}:${min}:${sec}`;
}

updateTime();

setInterval(updateTime, 1000);