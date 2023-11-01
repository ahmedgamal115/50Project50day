const password = document.querySelector('#password')
const btn = document.querySelector('.btn')
const img = document.querySelector(".container img")

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
const midumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")



// if(pass.match(regex))

password.addEventListener("keyup",(e)=>{
    let pass = String(e.target.value)
    console.log(strongRegex.test(pass))
    if(pass.length > 4 && !midumRegex.test(pass) && !strongRegex.test(pass)){
        img.style.filter = `blur(40px)`
    }
    if(pass.length > 4 && midumRegex.test(pass) && !strongRegex.test(pass)){
        img.style.filter = `blur(25px)`
    }
    if(pass.length > 4 && midumRegex.test(pass) && strongRegex.test(pass)){
        img.style.filter = `blur(0px)`
    }
})
btn.addEventListener('click',(e)=>{
    e.preventDefault()
})