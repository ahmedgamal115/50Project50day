const chamgeModeBtn = document.querySelector('#chamgeModeBtn')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const night = document.querySelector('.night')
const dayNum = document.querySelector('.dayNum')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const arrowHour = document.querySelector('.arrowHour')
const arrowMinutes = document.querySelector('.arrowMinutes')
const arrowSecends = document.querySelector('.arrowSecends')

let idx = 0
const nightOrMorng = ['PM','AM']
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const organizeData = ()=>{
    const date = new Date()
    if(date.getHours() > 12){
        hours.innerHTML = date.getHours()-12
        minutes.innerHTML = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
        night.innerHTML = nightOrMorng[0]
        arrowPosition(date.getHours()-12,date.getMinutes(),date.getSeconds())
    }else{
        hours.innerHTML = date.getHours()
        minutes.innerHTML = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
        night.innerHTML = nightOrMorng[1]
        arrowPosition(date.getHours()-12,date.getMinutes(),date.getSeconds())
    }
    dayNum.innerHTML = date.getDate()
    month.innerHTML = months[date.getMonth()]
    day.innerHTML = days[date.getDay()]+","
}

/* (6,0,11,0,360) */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const arrowPosition = (hours,minutes,secends) =>{
    arrowHour.style.transform = `translate(0%,-100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    arrowMinutes.style.transform = `translate(0%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    arrowSecends.style.transform = `translate(0%,-100%) rotate(${scale(secends, 0, 59, 0, 360)}deg)`
}


chamgeModeBtn.addEventListener('click',()=>{
    document.body.classList.toggle("dark")
    if(idx){
        chamgeModeBtn.innerHTML = "Dark Mode"
        idx = 0
    }else{
        chamgeModeBtn.innerHTML = "Light Mode"
        idx = 1
    }
})

organizeData()

setInterval(() => {
    organizeData()
}, 1000);