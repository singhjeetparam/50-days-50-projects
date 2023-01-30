const themeBtn = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const dateEl = document.querySelector(".date")
const timeEl = document.querySelector(".time")

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    themeBtn.classList.toggle("theme__btn")
})

const arrayOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    const year = time.getFullYear();
    console.log(month)

    dateEl.textContent = `${date} - ${arrayOfMonths[month]} - ${year}`
    timeEl.textContent = `${hours} : ${minutes}`

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000)