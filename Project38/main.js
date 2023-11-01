const imageContent = document.querySelector(".imageContent")
const lis = document.querySelectorAll('.controller ul li')

lis.forEach((li)=>{
    li.addEventListener('click',()=>{
        lis.forEach((x)=>{
            x.classList.remove("active")
        })
        li.classList.add("active")

        const title = li.querySelector('.title')
        if(title.innerText === 'Home'){
            imageContent.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg)'
        }else if(title.innerText === 'Work'){
            imageContent.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg)'
        }else if(title.innerText === 'Blog'){
            imageContent.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_640.jpg)'
        }else{
            imageContent.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_640.jpg)'
        }
    })
})