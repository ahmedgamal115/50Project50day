





// createQuestion()


const categories = document.querySelectorAll('.category')
const select = document.querySelector('.select')
const start = document.querySelector('#start')

var quizCategory = 'CMS'

categories.forEach((category)=>{
    category.addEventListener('click',()=>{
        categories.forEach((x)=>{
            x.classList.remove('active')
        })
        category.classList.add('active')
        var title = category.querySelector('.title')
        if(title.innerText.toLowerCase() === 'all'){
            select.innerHTML = `You will add <span>${title.innerText}</span> categories`
        }else{
            select.innerHTML = `You will add <span>${title.innerText}</span> category`
        }
        quizCategory = title.innerText
    })
})


start.addEventListener('click',async()=>{
    console.log(quizCategory)
    await fetch('http://localhost:3000/getQuiz',{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({"catagory":quizCategory})
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.state === "Done"){
            setTimeout(() => {
                window.location.href = '/quiz'
            }, 2000);
        }
    })
})

