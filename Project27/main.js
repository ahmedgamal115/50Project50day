const btn = document.querySelector("#btn")
const tossContainer = document.querySelector(".tossContainer")

const words = ["Message One","Message Two","Message Three","Message four"]
const classes = ["sucess","fail","info"]

btn.addEventListener("click",()=>{
    const randomNumWords = Math.floor(Math.random()*words.length)
    const randomNumClasses = Math.floor(Math.random()*classes.length)
    const div = document.createElement("div")
    div.classList.add("toast",classes[randomNumClasses])
    div.innerText = words[randomNumWords]
    tossContainer.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000);
})