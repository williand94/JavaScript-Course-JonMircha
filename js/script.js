import {digitalWatch,soundAlarm} from "./dom/digital_clock.js";
import hamburgerMenu from "./dom/nav_hamburger.js";
import { shortcuts, moveBall } from "./dom/key_events.js";
const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".hamburger",".nav",".nav__link");
    digitalWatch('.btn-start-watch', '.btn-stop-watch');
    soundAlarm('.btn-start-alarm', '.btn-stop-alarm');
});

d.addEventListener('keydown',(e)=> {
    shortcuts(e);
    moveBall(e,'.ball','.table');

})


//const $button = document.getElementById('hamburger__nav'),
      //$nav = document.querySelector('.nav');
  
