const openBars = document.querySelector(".openBars")
const closeBars = document.querySelector(".closeBars")
const container = document.querySelector(".container")
const circle = document.querySelector(".circle")


openBars.addEventListener('click',()=>{
    container.classList.add("rotate-page")
    circle.classList.add("rotate-cit")
})
closeBars.addEventListener('click',()=>{
    container.classList.remove("rotate-page")
    circle.classList.remove("rotate-cit")
})