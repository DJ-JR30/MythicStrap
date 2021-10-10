(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const MythicStrap = require("../../frontend.js");


MythicStrap.Timed_Alert(7);




},{"../../frontend.js":2}],2:[function(require,module,exports){
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


},{}]},{},[1]);
