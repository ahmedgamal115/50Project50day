const passLength = document.querySelector("#passLength")
const copyPass = document.querySelector("#copyPass")
const Generate = document.querySelector("#Generate")
const output = document.querySelector(".output")
const choices = document.querySelectorAll(".info input")

let passwidth = 20



const uppercaseGenrator= () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 64)
}
const lowercaseGenrator = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 96)
}
const numberGenrator = () =>{
    return Math.floor(Math.random() * 10)
}
const symbolGenrator = () =>{
    let symbols = '!@#$%^&*()_-?/<>{}[]|,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

let passContent = {
    "lowercase":{"val":false,"function":lowercaseGenrator},
    "uppercase":{"val":false,"function":uppercaseGenrator},
    "number":{"val":false,"function":numberGenrator},
    "symbel":{"val":false,"function":symbolGenrator}
}

passLength.addEventListener("change",(e)=>{
    if(e.target.value > 40){
        passwidth = 40
        passLength.value = 40
    }else{
        passwidth = e.target.value
    }
    console.log(passwidth)
})
choices.forEach((choice)=>{
    choice.addEventListener("change",()=>{
        if(choice.name in passContent){
            passContent[choice.name].val = choice.checked
        }
    })
})
copyPass.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    textarea.value = output.innerText
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy");
    textarea.remove()
    alert("Text copied to clipboard");
})


Generate.addEventListener("click",()=>{
    let password = ''
    let out = Object.entries(passContent).filter((x)=> x[1].val === true)
    if(out == 0){
        output.innerText = ''
    }else{
        for (let index = 0; index < passwidth; index += out.length) {
            out.forEach(type => {
                password += type[1].function()
            })
        }
        // const finalPassword = password.slice(0, length)
        output.innerText = password.slice(0, passwidth)
    }
})
