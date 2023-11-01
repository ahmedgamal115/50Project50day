const text = document.querySelector(".text")
const speedEl = document.querySelector(".contral input")

const words = 'Never Give Up'
var idx = 1
let speedVal = 300 / speedEl.value


const writeText = ()=>{
    text.innerText = words.slice(0,idx)
    idx++
    if(idx > words.length){
        idx = 1
    }

    setTimeout(() => {
        writeText()
    }, speedVal);
}

writeText()

speedEl.addEventListener('change',(e)=>{
    speedVal = 300 / e.target.value
})