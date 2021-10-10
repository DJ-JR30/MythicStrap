var Alerts = document.getElementById("Alerts");







function Timed_Alert(timeout=7) {
  
  
  Alerts.style.display = "block";
  Alerts.style.visibility = "visible";
countdown(timeout);
  Alerts.style.display = "hidden";
  Alerts.style.visibility = "hidden";
  
  
}



var seconds;
var temp;
 
  function countdown(Sec=Number) {
    seconds = Sec;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 
 










module.exports = {
  Timed_Alert
}

