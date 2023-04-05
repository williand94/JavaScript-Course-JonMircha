export default function digitalWatch(btnStartWatch, btnStopWatch, btnStarAlarm, btnStopAlarm) {
    const d = document;
    d.addEventListener('click', e => {
        if(e.target.matches(btnStartWatch)){
            
            setInterval(() => {
                const hour = new Date();
                d.querySelector('.watch').textContent =  hour.toLocaleTimeString();
                d.querySelector(btnStartWatch).setAttribute("disabled", "");
                console.log(hour.toLocaleTimeString());
            }, 1000);
        }
    })
}