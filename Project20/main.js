const btn = document.querySelector(".btn")

btn.addEventListener('click',(e)=>{
    let x = e.clientX
    let y = e.clientY

    let bounderTop = e.target.offsetTop
    let bounderLeft = e.target.offsetLeft

    let positionX = x - bounderLeft
    let positionY = y - bounderTop

    const span = document.createElement("span")
    span.classList.add("cit")
    span.style.top = positionY + "px"
    span.style.left = positionX + "px"
    btn.appendChild(span)
    setTimeout(() => {
        span.remove()
    }, 500);
})