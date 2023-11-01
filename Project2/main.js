const spans = document.querySelectorAll('.numbers span')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
var index = 0
if(index === 0){
    prev.classList.add('blockBtn')
}
const moveSlider = (num,state)=>{
    spans.forEach((span,index)=>{
        if(num === index && state === "increase"){
            span.classList.add('active')
        }else if(num+1 === index && state === "decrease"){
            span.classList.remove('active')
        }
    })
}

next.addEventListener('click',()=>{
    if(index < (spans.length-1)){
        index++
        if(prev.classList.contains('blockBtn')){
            prev.classList.remove('blockBtn')
        }
    }
    if(index === (spans.length-1)){
        next.classList.add('blockBtn')
    }
    moveSlider(index,"increase")
})
prev.addEventListener('click',()=>{
    if(index !== 0){
        index--
        if(next.classList.contains('blockBtn')){
            next.classList.remove('blockBtn')
        }
    }
    if(index === 0){
        prev.classList.add('blockBtn')
    }
    moveSlider(index,"decrease")
})

