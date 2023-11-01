const emailAddress = document.querySelector('#emailAddress')
const btn = document.querySelector('.btn')

var email = ''

emailAddress.addEventListener('keyup',(e)=>{
    email = e.target.value
})

btn.addEventListener('click',async()=>{
    await fetch('http://localhost:3000/sendmail',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"email":email})
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data){
            setTimeout(()=>{
                window.location.href = '/Varify'
            },[1000])
        }
    })
})
