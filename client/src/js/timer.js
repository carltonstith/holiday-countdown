const second = 1000;
const      minute = second * 60;
const     hour = minute * 60;
const      day = hour * 24;

let countdown = new Date('Dec 25, 2019 00:00:00').getTime(),
    timer = setInterval(function() {
        let now = new Date().getTime(),
            distance = countdown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / (second));

    }, second)
