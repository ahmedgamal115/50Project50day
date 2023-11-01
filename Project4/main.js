const input = document.querySelector("#search")
const SearchIcon = document.querySelector("#SearchIcon")
var index = 0

SearchIcon.addEventListener("click",()=>{
    if(index === 0){
        input.classList.add("minimize")
        index = 1
    }else{
        input.classList.remove("minimize")
        index = 0
    }
})