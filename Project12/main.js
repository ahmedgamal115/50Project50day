const btns = document.querySelectorAll('#btn')
const quContents = document.querySelectorAll('.quContent')

btns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        if(quContents[index].classList.contains('active')){
            quContents[index].classList.remove('active')
        }else{
            quContents[index].classList.add('active')
        }
    })
})