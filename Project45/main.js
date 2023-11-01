const openIcon = document.querySelector(".openIcon")
const closeIcon = document.querySelector(".closeIcon")
const layers = document.querySelectorAll(".layer")



openIcon.addEventListener('click',()=>{
    layers.forEach((layer)=>{
        layer.classList.remove("hide")
    })
})
closeIcon.addEventListener('click',()=>{
    layers.forEach((layer)=>{
        layer.classList.add("hide")
    })
})