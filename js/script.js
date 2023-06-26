import {digitalWatch,soundAlarm} from "./dom/digital_clock.js";
import hamburgerMenu from "./dom/nav_hamburger.js";
import { shortcuts, moveBall } from "./dom/key_events.js";
import countDown from "./dom/count_down.js";
import scrollButton from "./dom/scroll_button.js";
import darkTheme from "./dom/dark_theme.js";
import responsiveMedia from "./dom/responsive_js.js";
const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".hamburger",".nav",".nav__link");
    digitalWatch('.btn-start-watch', '.btn-stop-watch');
    soundAlarm('.btn-start-alarm', '.btn-stop-alarm');
    countDown('countdown','06 15, 2023','Happy Birthday Broth, God bless you my homie...🤞🏀');
    scrollButton('.scroll-top-btn');
    responsiveMedia('youtube','(min-width:1024px',`<a href='https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92' target='_blank' rel='noopener'>Watch Vídeo</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia('gmaps','(min-width:1024px',`<a href='https://goo.gl/maps/yVWXqov27Qi7GXB2A' target='_blank rel='noopener '>Whatch Map</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6297428243197!2d-77.08134912646086!3d3.8892744960845147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e37238ad7481253%3A0x9991e4af5a0cad47!2sHotel%20Capilla%20Del%20Sol!5e0!3m2!1ses!2sco!4v1686113083271!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
});

d.addEventListener('keydown',(e)=> {
    shortcuts(e);
    moveBall(e,'.ball','.table');
    
});

darkTheme('.dark-theme-btn','dark-mode');


  
