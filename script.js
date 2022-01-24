setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrot = 30*hr + min/2;
    minrot = 6*min;
    secrot = 6*sec;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${minrot}deg)`;
    second.style.transform = `rotate(${secrot}deg)`;

}, 1000);