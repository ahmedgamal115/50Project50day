const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('.timer')
const score = document.querySelector('.score')
const insectContainer = document.querySelector('.insectContainer')
const game = document.querySelector('.game')
const insects = document.querySelectorAll('.insect')

var insectImage = ''
var seconds = 0
var scoreValue = 0

startBtn.addEventListener('click',()=>{
  startBtn.parentElement.classList.add('up')
})

insects.forEach((insect)=>{
  insect.addEventListener('click',()=>{
    const img = insect.querySelector('img')
    insectImage = img.src
    insect.parentElement.parentElement.classList.add('up')
    startPlay()
  })
})



const increaseTime = () => {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timer.innerHTML = `<span>Timer: </span> ${m}:${s}`
  seconds++
  if(m == 1){
    endGame()
  }
}

const createInsects = ()=>{
  const x = window.innerWidth - 100
  const y = window.innerHeight - 150
  insectContainer.innerHTML += 
  `
  <div class="randomInsect" style="top:${y - Math.floor(Math.random() * y)}px;left:${x - Math.floor(Math.random() * x)}px;">
    <img src="${insectImage}" alt="insect" style="transform: rotate(${Math.floor(Math.random() * 360)}deg);">
  </div>
  `
  const randomInsects = document.querySelectorAll('.randomInsect')
  randomInsects.forEach((randomInsect)=>{
    randomInsect.addEventListener('click',()=>{
      crushInsects(randomInsect)
    })
  })
}

const startPlay = ()=>{
  setInterval(() => {increaseTime()}, 1000);
  createInsects()
}

const crushInsects = (randomInsect)=>{
  randomInsect.classList.add('crush')
  scoreValue++
  score.innerHTML = `<span>Score: </span> ${scoreValue}`
  setTimeout(() => {randomInsect.remove()}, 500);
  setInsects()
}

const setInsects = () =>{
  setTimeout(() => {createInsects()}, 1000);
  setTimeout(() => {createInsects()}, 1500);
}

const endGame = () =>{
  game.innerHTML =
  `
  <div class="endScore">
    Your Score is ${scoreValue} in 1 min
  </div>
  `
  setTimeout(() => {
    window.location.href = '/'
  }, 4000);
}