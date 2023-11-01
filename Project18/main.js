const leftBtn = document.querySelector('.leftBtn')
const images = document.querySelectorAll('.imageContent .image')
const rightBtn = document.querySelector('.rightBtn')
const container = document.querySelector('.container')
var index = 0

console.log(images.length)
images[0].style.backgroundImage = `url('${images[0].getAttribute('data-imageUrl')}')`
container.style.backgroundImage = `url('${images[0].getAttribute('data-imageUrl')}')`

rightBtn.addEventListener('click',()=>{
    if(index < images.length-1){
        index++
    }else{
        index = 0
    }
    appearImage(index)
})
leftBtn.addEventListener('click',()=>{
    if(index !== 0){
        index--
    }else{
        index = images.length-1
    }
    appearImage(index)
})

const appearImage = (idx)=>{
    images.forEach((image)=>{
        if(image.classList.contains('active')){
            image.classList.remove('active')
        }
    })
    images[idx].classList.add('active')
    images[idx].style.backgroundImage = `url('${images[index].getAttribute('data-imageUrl')}')`
    container.style.backgroundImage = `url('${images[index].getAttribute('data-imageUrl')}')`
}