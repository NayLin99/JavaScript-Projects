const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const newYears = new Date().getFullYear() + 1; // current year + 1

function countDown() {
    const SECONDS_IN_A_DAY = 86400;
    const SECONDS_IN_A_HOUR = 3600;
    const SECONDS_IN_A_MINUTE = 60;
    const newYearsDate = new Date(newYears, 0, 1); // 1st Jan
    const currentDate = new Date();

    let seconds = Math.floor(Math.abs(newYearsDate - currentDate) / 1000);

    const days = Math.floor(seconds / SECONDS_IN_A_DAY);

    seconds = seconds % SECONDS_IN_A_DAY;

    const hours = Math.floor(seconds / SECONDS_IN_A_HOUR);

    seconds = seconds % SECONDS_IN_A_HOUR;

    const minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);

    seconds = seconds % SECONDS_IN_A_MINUTE;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countDown();

setInterval(countDown, 1000);
