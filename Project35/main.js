const images = document.querySelectorAll('.imageContent img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

var index = 0

const run = ()=>{
    index++
    changeImage()

}
const changeImage = () =>{
    if(index >= images.length){
        index = 0
    }else if(index < 0){
        index = images.length - 1
    }
    images.forEach((img)=>{
        img.style.transform = `translateX(-${index * 100}%)`
    })
}

var interval = setInterval(run, 2000);

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}




next.addEventListener('click',()=>{
    index++
    changeImage()
    resetInterval()
})
prev.addEventListener('click',()=>{
    index--
    changeImage()
    resetInterval()
})
