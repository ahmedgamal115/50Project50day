const cups = document.querySelectorAll('.cup')
const persentage = document.querySelector('.persentage')
const empty = document.querySelector('.empty')
const val = document.querySelector('.empty .value')
const full = document.querySelector('.full')

cups.forEach((cup,index)=>{
    cup.addEventListener('click',()=>{
        recolorCups(index)
    })
})

const recolorCups = (index)=>{
    if(cups[index].classList.contains('choice') && !cups[index].nextElementSibling.classList.contains('choice')){
        index--
    }
    cups.forEach((cup,idx)=>{
        if(idx <= index){
            cup.classList.add('choice')
        }else{
            cup.classList.remove('choice')
        }
    })
    updateBottel()
}

const updateBottel = () =>{
    let number = 0
    cups.forEach((cup)=>{
        if(cup.classList.contains('choice')){
            number++
        }
    })
    const cap = val.getAttribute('data-cap')
    val.innerText = (cap * (number/cups.length)*100)/100 + 'L'
    persentage.innerText = (number/cups.length)*100 + '%'
    empty.style.height = `${100-((number/cups.length)*100)}%`
    full.style.height = `${((number/cups.length)*100)}%`
}