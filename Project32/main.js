const inputs = document.querySelectorAll(".choice input")

inputs.forEach((input)=>{
    input.addEventListener("click",()=>{
        input.parentElement.classList.toggle("active")
        console.log(inputs[0].checked && inputs[1].checked && inputs[2].checked)
        if(inputs[0].checked && inputs[1].checked && inputs[2].checked){
            if(input.name === "Good"){
                inputs[2].parentElement.classList.toggle("active")
                inputs[2] .checked = false
            }if(input.name === "Cheap"){
                inputs[0].parentElement.classList.toggle("active")
                inputs[0] .checked = false
            }if(input.name === "Fast"){
                inputs[1].parentElement.classList.toggle("active")
                inputs[1] .checked = false
            }
        }
    })
})