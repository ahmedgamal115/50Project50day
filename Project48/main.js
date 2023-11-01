const content = document.querySelector('.content')
const URL = 'https://source.unsplash.com/random/'

const randomNumber = () =>{
  return Math.floor(Math.random()*99) + 300
}
const randomSize = ()=>{
  return `${randomNumber()}X${randomNumber()}`
}


for (let index = 0; index < 10 * 3; index++) {
  content.innerHTML += `<img src="${URL} ${randomSize()}" alt="">`
  
}