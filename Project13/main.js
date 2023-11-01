const textarea = document.querySelector('#data')
const output = document.querySelector('.output')

textarea.addEventListener('keyup',(e)=>{
    createSpans(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 100);
        randomChoice()
    }
})

const createSpans = (input)=>{
    let texts = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    output.innerHTML = ''
    texts.forEach(text => {
        const span = document.createElement('span')
        span.setAttribute('id','results')
        span.innerHTML = text
        output.appendChild(span)
    });
}

const randomChoice = ()=>{
    const spans = document.querySelectorAll('#results')
    let times = 0
    const interval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * spans.length)
        spans[randomNumber].classList.add('active')
        if(times === 50){
            clearInterval(interval)
        }else{
            setTimeout(() => {
                spans[randomNumber].classList.remove('active')
            }, 100);
        }
        times++
    }, 100);
}