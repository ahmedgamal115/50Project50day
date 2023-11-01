const navbar = document.querySelector(".navbar")

document.addEventListener("scroll",()=>{
    if(window.scrollY > 150){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
})