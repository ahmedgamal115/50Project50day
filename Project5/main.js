const image = document.querySelector(".image")
const number = document.querySelector(".number")
var blurDegree = 40

var decressblur = setInterval(() => {
    blurDegree = blurDegree - 1
    if(blurDegree >= 0){
        image.style.filter = `blur(${blurDegree}px)`
        number.innerHTML = Math.floor(100 - ((blurDegree/40)*100)) +' %'
        number.style.opacity = 0.01 * Math.floor(((blurDegree/40)*100))
    }else{
        clearInterval(decressblur)
    }
}, 50);
