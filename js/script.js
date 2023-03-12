import digitalWatch from "./dom/digital_clock.js";
import hamburgerMenu from "./dom/nav_hamburger.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".hamburger",".nav",".nav__link");
    digitalWatch('.btn-start-watch', 'btnStopWatch', 'btnStarAlarm', 'btnStopAlarm')
});

//const $button = document.getElementById('hamburger__nav'),
      //$nav = document.querySelector('.nav');
  
