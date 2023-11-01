const contents = document.querySelectorAll(".content")

var checkPosition = ()=>{
    var windowHeight = window.innerHeight / 5 * 4
    contents.forEach(content=>{
    var contentPosition = content.getBoundingClientRect().top
    if(contentPosition < windowHeight){
        content.classList.add("resetPosition")
    }else{
        content.classList.remove("resetPosition")
    }
    })
}


window.addEventListener("scroll",checkPosition)

checkPosition()

