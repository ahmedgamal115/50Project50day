const object = document.querySelector(".object")
const count = document.querySelector(".count span")

var countNumber = 0


object.addEventListener("dblclick",(e)=>{
    const objectOffsetTop = object.offsetTop
    const objectOffsetLeft = object.offsetLeft
    const y = e.clientY
    const x = e.clientX
    countNumber++
    count.innerHTML = countNumber
    const i = document.createElement("i")
    i.classList.add("fa-solid","fa-heart")
    i.style.top = y -objectOffsetTop + 'px'
    i.style.left = x - objectOffsetLeft + 'px'
    object.appendChild(i)
    setTimeout(()=>{i.remove()},[1000])
})