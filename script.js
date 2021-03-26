var wakeupTime = 8; // 8AM
var noon = 12;
var lunchTime = 13; // 1PM
var napTime = lunchTime + 2; // 3PM
var evening = 17; // 5PM
var partyTime = 20; // 8PM


var time = new Date().getHours();

var updateClock = function()
{
  var timeEventJS = document.getElementById("timeEvent");
  var messageText;
  var lolcatJS = document.getElementById("lolcat");
  var image = "https://i2-prod.mirror.co.uk/incoming/article21712697.ece/ALTERNATES/s615b/75196270_1377714782397321_1365141082857275392_n.jpg";


if (time == wakeupTime) { //8am//
	image = "https://pyxis.nymag.com/v1/imgs/531/7e8/c9d8e739373238f87597f41da55eedb777-5-Carole-Baskin-Song.2x.rsquare.w330.jpg";
	messageText = "get the hell up";
} else if (time < noon) { //12pm//
  image = "https://i2-prod.mirror.co.uk/incoming/article21744359.ece/ALTERNATES/s615b/0_Big-Cat-Rescue-Carole-Baskin-Joseph-Joe-Exotic-Maldonado-Passage.jpg"
	messageText = "hey all you cool cats & kittens";
} else if (time == lunchTime) { //1pm//
	image = "https://images.unsplash.com/photo-1576776295278-c15160d7f459?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80";
	messageText = "Feed me, NOW!";
} else if (time == napTime) { //3pm//
	image = "https://lazypenguins.com/wp-content/uploads/2015/11/Bengal-Tiger-Napping.jpg";
	messageText = "Zzzz";
} else if (time == partyTime) { //9pm//
  image = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB11Nrcv.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1069&y=359";
  messageText = "Get in, we're goin' ta Vegas";
} else if (time > evening) { //5pm//
	messageText = "Are the animals happy? Who knows.";
}	else {
	messageText = "that Carole friggin Baskin!";
}

timeEventJS.innerText = messageText;
lolcatJS.src = image;

var showCurrentTime = function()
{ // display the string on the webpage
  var clock = document.getElementById('clock');
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
    // Set hours
  if (hours >= noon)
  { meridian = "PM"; }
  if (hours > noon)
  { hours = hours - 12; }
    // Set Minutes
  if (minutes < 10)
  { minutes = "0" + minutes; }
    // Set Seconds
  if (seconds < 10)
  { seconds = "0" + seconds; }
    // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "";

  clock.innerText = clockTime;
};

showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

//Party Button

var partyTimeButton = document.getElementById("partyTimeButton");

var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "transparent";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#ffcd73";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

//Time Selectors

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
