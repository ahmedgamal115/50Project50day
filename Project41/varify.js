const codes = document.querySelectorAll('.code')
const varify = document.querySelector('.varify')

codes[0].focus()

var currentCode = ''

codes.forEach((code,idx)=>{
    code.addEventListener('keyup',(e)=>{
        if(e.target.value){
            if(idx !== codes.length - 1)
                codes[idx+1].focus()
            currentCode += e.target.value
        }
        if(e.key === "Backspace"){
            if(idx !== 0){
                codes[idx-1].focus()
                codes[idx-1].value = ''
                let codeArray = []
                codes.forEach((code)=>{
                    codeArray.push(code.value)
                })
                currentCode = ''
                codeArray.map((digite)=>{
                    currentCode += digite 
                })
            }
        }
    })
})

varify.addEventListener('click',async()=>{
    if(currentCode.split('').length === 6){
        await fetch('http://localhost:3000/varifyCode',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({"currentCode":currentCode})
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            if(data === 200){
                alert("complete Validation")
                window.location.href = '/'
            }else{
                alert("Not correct number validation")
            }
        })
    }else{
        alert("Please check code number")
    }
})