var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 6; // 6AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var time = new Date().getHours();

var updateClock = function()
{
  var timeEventJS = document.getElementById("timeEvent");
  var messageText;
  var lolcatJS = document.getElementById("lolcat");
  var image = "https://i2-prod.mirror.co.uk/incoming/article21712697.ece/ALTERNATES/s615b/75196270_1377714782397321_1365141082857275392_n.jpg";


if (time == wakeupTime) {
	image = "https://cpng.elsetge.cat/myimg/s/193-1933065_animal-king-of-the-jungle-tiger-theme-hd.jpg";
	messageText = "Get The Hell Up!";
} else if (time == napTime) {
	image = "https://i.insider.com/5d5c235bcd97847e990b478c?width=750&format=jpeg&auto=webp";
	messageText = "I hate you";
} else if (time < noon) {
	messageText = "Hey you cool cats & kittens";
} else if (time == lunchTime) {
	image = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB11NtD0.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f";
	messageText = "Feed me before I eat your face off!";
} else if (time > evening) {
	messageText = "that Carol friggin Baskin!";
} else if (time == partyTime) {
	image = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB11Nrcv.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1069&y=359";
	messageText = "Get in";
}	else {
	messageText = "What a Puurrfect Afternoon!";
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
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

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
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

//Time Selectors

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
