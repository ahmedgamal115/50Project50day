const emojes = document.querySelectorAll(".emoje")
const btn = document.querySelector(".btn")
const content = document.querySelector(".content")

var str = 'Satisfied'

emojes.forEach((emoje)=>{
    emoje.addEventListener("click",()=>{
        emojes.forEach((x)=>{
            x.classList.remove('active')
        })
        emoje.classList.add("active")
        var name = emoje.querySelector('.name')
        str = name.innerText
    })
})

btn.addEventListener('click',()=>{
    content.innerHTML = `
        <div class="thanks">
            <i class="fa-solid fa-heart"></i>
            <div class="title">Thank You!</div>
        </div>
        <div class="feedback">
            Feedback: <span>${str}</span>
        </div>
        <div class="hint">
            <p>We'll use your feedback to improve our customer support</p>
        </div>
    `
})


