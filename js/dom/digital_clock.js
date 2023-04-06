export default function digitalWatch(btnStartWatch, btnStopWatch, btnStarAlarm, btnStopAlarm) {
    const d = document;
    let interval;

    d.addEventListener('click', e => {
        if(e.target.matches(btnStartWatch)){
            interval = setInterval(timer,1000);        
            function timer(){
                const hour = new Date();
                d.querySelector('.watch').textContent =  hour.toLocaleTimeString();
                d.querySelector(btnStartWatch).setAttribute("disabled", "");
                //console.log(hour.toLocaleTimeString());
            }
        }

        if(e.target.matches(btnStopWatch)){
            d.querySelector('.watch').textContent =  "";
            d.querySelector(btnStartWatch).removeAttribute("disabled");
            clearInterval(interval);  
        }
    })


}