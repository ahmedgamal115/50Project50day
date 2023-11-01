const content = document.querySelector('.content')
const btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    content.classList.toggle('active')
})