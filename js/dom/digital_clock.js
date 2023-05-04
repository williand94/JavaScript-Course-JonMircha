const d = document;    
export function digitalWatch(btnStartWatch, btnStopWatch) {
    let interval;

    d.addEventListener('click', e => {
        if (e.target.matches(btnStartWatch)) {
            interval = setInterval(()=>{
                const hour = new Date();
                d.querySelector('.watch').textContent = hour.toLocaleTimeString();
                //d.querySelector(btnStartWatch).setAttribute('disabled', '');
                e.target.disabled = true;
                //console.log(hour.toLocaleTimeString());
            },1000)
        }
        
        if (e.target.matches(btnStopWatch)) {
            d.querySelector('.watch').textContent = null;
            d.querySelector(btnStartWatch).disabled = false;
            clearInterval(interval);
        }        
    })
}

export function soundAlarm(btnStartAlarm, btnStopAlarm) {
    
    const 
          //Creamos la instancia de audioContext para poder utilizar todas las características de WEB AUDIO API  
          audioContext = new AudioContext(),
          // get the audio element
          audioElement = d.querySelector('.audio'),
          // pass it into the audio context
          track = audioContext.createMediaElementSource(audioElement);
        
    //Connetcing audio graphic to final destination                                                    

    track.connect(audioContext.destination);

    d.addEventListener('click',e =>{

        if (e.target.matches(btnStartAlarm)) {
            // Check if context is in suspended state (autoplay policy)
            if (audioContext.state === 'suspended') audioContext.resume();

            if (d.querySelector(btnStartAlarm).dataset.playing === 'false') {
                audioElement.play();
                d.querySelector(btnStartAlarm).setAttribute('disabled', '')
                d.querySelector(btnStartAlarm).dataset.playing = 'true';
                d.querySelector(btnStopAlarm).dataset.playing = 'true'
                console.log(audioContext.state);

            } else if (d.querySelector(btnStopAlarm).dataset.playing === 'true') {
    
                d.querySelector(btnStartAlarm).removeAttribute('disabled');
                audioElement.pause();
            }
        }

        if (e.target.matches(btnStopAlarm)) {
            d.querySelector(btnStartAlarm).dataset.playing = 'false';
            d.querySelector(btnStartAlarm).removeAttribute('disabled');
            audioElement.pause();
        }
        
    })
}