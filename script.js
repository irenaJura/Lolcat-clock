const clock = document.querySelector("#clock");
const wakeUp = 8;
const noon = 12;
const lunch = 12;
const nap = lunch + 2;
const evening = 18;
const partyButton = document.querySelector("#partyTimeButton");
let partyTime;
const img = document.querySelector("#lolcatImage");
const message = document.querySelector("#timeEvent");

// set up clock
function updateTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const meridian = hour > 12 ? 'PM' : 'AM';
  clock.innerText = `${hour > 12 ? hour - 12 : hour}:${min < 10 ? '0'+ min : min}:${sec < 10 ? '0' + sec : sec}${meridian}`;
  // set conditions to replace images and text
    if(hour == partyTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "Let's party!";
    } else if(hour == wakeUp) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Good morning!";
    } else if (hour == lunch) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Let's have some lunch!";
    } else if (hour == nap) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "Sleep tight!";
    } else if(hour < noon){
      image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
      messageText = "Good morning!";
    } else if(hour >= evening) {
      image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
      messageText = "Good evening!";
    } else {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
      messageText = "Good afternoon!";
    }
    img.src = image;
    message.innerText = messageText;
}


updateTime();

setInterval(updateTime, 1000);

function updateImage() {
  if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyTime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
}
updateImage();  
partyButton.addEventListener("click", updateImage);



