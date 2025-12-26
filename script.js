document.addEventListener('DOMContentLoaded', function(){
// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("dayCounter").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes and " + seconds + " seconds - Until Christmas Day";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dayCounter").innerHTML = "EXPIRED";
  }
}, 1000);
// Set the date we're counting down to
var eveCountDownDate = new Date("Dec 24, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = eveCountDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var evedays = Math.floor(distance / (1000 * 60 * 60 * 24));
  var evehours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var eveminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var eveseconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("eveCounter").innerHTML = evedays + " days " + evehours + " hours "
  + eveminutes + " minutes and " + eveseconds + " seconds -Until Christmas Eve";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("eveCounter").innerHTML = "EXPIRED";
  }
}, 1000);
});
