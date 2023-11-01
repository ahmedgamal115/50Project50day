const spans = document.querySelectorAll(".count span")
const content = document.querySelector(".content")
const slog = document.querySelector(".slog")
const replayBtn = document.querySelector("#replayBtn")



const startAnimation = () =>{
    spans.forEach((span,index)=>{
        span.addEventListener('animationend',(e)=>{
            if(e.animationName === 'goIn' && index !== 3){
                span.classList.remove('in')
                span.classList.add('out')
            }else if(e.animationName === 'goOut' && span.nextElementSibling){
                span.nextElementSibling.classList.add('in')
            }else{
                content.classList.add('hide')
                slog.classList.remove('hide')
            }
    
        })
    })
}

startAnimation()
replayBtn.addEventListener('click',()=>{
    content.classList.remove('hide')
    slog.classList.add('hide')
    spans.forEach((span)=>{
        span.classList = ''
    })
    spans[0].classList.add('in')
    startAnimation()
})


