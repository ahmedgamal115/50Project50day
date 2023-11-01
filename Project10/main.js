const btn = document.querySelector('#joke')
const joke = document.querySelector('.joke')

const getJoke = async()=>{
    await fetch('https://api.api-ninjas.com/v1/jokes?limit=1',{
        contentType: 'application/json',
        headers:{
            'X-Api-Key': '3k8bphQDdjwmI4pl8ECG0w==rg1p4ZB4CTX9KU4z'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data){
            setTimeout(() => {
                document.querySelector('.loader').remove()
            }, 2000);
        }
        joke.innerHTML = data[0].joke
    })
}

getJoke()


btn.addEventListener('click',async()=>{
    getJoke()
})