const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);
    console.log(breakpoint);

    const responsive = (e) => {
        if (e.matches) {
            console.log(e.matches, e, breakpoint);
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent
        }

    };
    
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}      