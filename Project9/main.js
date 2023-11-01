const sounds = document.querySelectorAll(".sound")
const player = document.querySelector("#player")

sounds.forEach(sound=>{
   sound.addEventListener('click',()=>{
    if(sound.innerText === "applause"){
        player.src = "./sound/short-crowd-cheer-6713.mp3"
        player.play()
    }else if(sound.innerText === "boo"){
        player.src = "./sound/boo-6377.mp3"
        player.play()
    }else if(sound.innerText === "gasp"){
        player.src = "./sound/gasp-6253.mp3"
        player.play()
    }else if(sound.innerText === "tada"){
        player.src = "./sound/tada-fanfare-a-6313.mp3"
        player.play()
    }else if(sound.innerText === "victory"){
        player.src = "./sound/success-fanfare-trumpets-6185.mp3"
        player.play()
    }else if(sound.innerText === "wrong"){
        player.src = "./sound/fail-144746.mp3"
        player.play()
    }
   })
})
