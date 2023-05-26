const d = document;
export default function countDown(id, limitDate, message) {

    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {

        let today = new Date().getTime(),
            finalDate = countdownDate - today,
            days = Math.floor(finalDate / (1000 * 60 * 60 * 24)),
            hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )),
            minutes = Math.floor((finalDate % (1000 * 60 * 60 )) / (1000 * 60 )),
            seconds = Math.floor((finalDate % (1000 * 60  )) / (1000));

        $countdown.innerHTML = `<h3> Less : ${days} days, ${hours} hours, ${minutes} minutes,
        and ${seconds} seconds </h3>`    
        console.log(days, countdownDate, today, finalDate);

        if (finalDate < 0) {
            clearInterval(countdownTempo)
            $countdown.innerHTML = `<h3> ${message}</h3>`
        }
    }, 1000);
}