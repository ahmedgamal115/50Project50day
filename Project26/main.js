const upBtn = document.querySelector(".upBtn")
const downBtn = document.querySelector(".downBtn")
const imageContainer = document.querySelector(".imageContainer")
const imageContents = document.querySelectorAll(".imageContent")
const heads = document.querySelectorAll(".headerContainer .head")
var idx = 0



upBtn.addEventListener("click",()=>{
    if(idx < imageContents.length-1){
        let currentIdx = (idx+1)
        imageContents.forEach(imageContent=>{
            imageContent.style.transform = `translateY(-${currentIdx * imageContainer.offsetHeight}px)`
        })
        heads.forEach(head=>{
            head.style.transform = `translateY(${currentIdx * imageContainer.offsetHeight}px)`
        })
        idx++
    }else{
        imageContents.forEach(imageContent=>{
            imageContent.style.transform = `translateY(0px)`
        })
        heads.forEach(head=>{
            head.style.transform = `translateY(0px)`
        })
        idx = 0
    }
})
downBtn.addEventListener("click",()=>{
    console.log(idx)
    if(idx !== 0){
        let currentIdx = (idx-1)
        imageContents.forEach(imageContent=>{
            imageContent.style.transform = `translateY(-${imageContainer.offsetHeight * currentIdx}px)`
        })
        heads.forEach(head=>{
            head.style.transform = `translateY(${currentIdx * imageContainer.offsetHeight}px)`
        })
        idx--
    }else{
        imageContents.forEach(imageContent=>{
            imageContent.style.transform = `translateY(-${imageContainer.offsetHeight * (imageContents.length - 1)}px)`
        })
        heads.forEach(head=>{
            head.style.transform = `translateY(${imageContainer.offsetHeight * (imageContents.length - 1)}px)`
        })
        idx = imageContents.length-1
    }
})
