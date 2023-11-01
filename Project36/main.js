const content = document.querySelector('.content')
let squares = 460

for (let index = 0; index < squares; index++) {
    const squ = document.createElement('div')
    squ.classList.add('square')
    squ.addEventListener('mouseover',()=>{
        var randomColor = Math.floor(Math.random()*16777215).toString(16)
        squ.style.background = `#${randomColor}`
        squ.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`
    })
    squ.addEventListener('mouseout',()=>{
        squ.style.background = 'rgb(63, 63, 63)'
        squ.style.boxShadow = '0 0 2px #000'
    })
    content.appendChild(squ)
}
