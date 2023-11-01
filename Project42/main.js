const users = document.querySelector('.users')
const searchBtn = document.querySelector('#searchBtn')

const putData = (photo,firstName,lastName,city,country)=>{
    users.innerHTML += `
            <div class="user">
                <img src="${photo}" alt="">
                <div class="info">
                    <div id="username" class="name">${firstName} ${lastName}</div>
                    <div class="nation">
                        <div class="city">${city},</div>
                        <div class="country">${country}</div>
                    </div>
                </div>
            </div>
        `
}

const getUsers = async()=>{
    await fetch('https://randomuser.me/api/?results=100',{
        method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.results.map((info)=>{
            return(
                putData(
                    info.picture.large,
                    info.name.first,
                    info.name.last,
                    info.location.city,
                    info.location.country
                )
            )
        })
        const loder = document.querySelector('.loder')
        loder.classList.add("hide")
    })
}

getUsers()

searchBtn.addEventListener("keyup",(e)=>{
    const username = document.querySelectorAll("#username")
    username.forEach(name=>{
        if(name.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            name.parentNode.parentNode.classList.remove("hide")
        }else{
            name.parentNode.parentNode.classList.add("hide")
        }
    })
})

