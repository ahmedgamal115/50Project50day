const canves = document.querySelector("#canvas")
const color = document.querySelector("#color")
const fontSize = document.querySelector("#fontSize")
const decrease = document.querySelector("#decrease")
const increase = document.querySelector("#increase")
const clearEl = document.querySelector("#clearEl")
const ctx = canves.getContext("2d")



var isDrow = false
var x,fontColor = 'black'
var y
var fontWidth = 10



canves.addEventListener('mousedown',(e)=>{
    isDrow = true
    x =  e.offsetX
    y =  e.offsetY
})
canves.addEventListener('mouseup',()=>{
    isDrow = false
    x = undefined
    y = undefined
})
canves.addEventListener('mousemove',(e)=>{
    if(!isDrow){
        return
    }
    let x2 = e.offsetX 
    let y2 = e.offsetY 
    
    drowCit(x2, y2);
    drowLine(x,y,x2,y2);
    
    x = x2
    y = y2
})


const drowCit = (x,y)=>{
    ctx.beginPath();
    ctx.arc(x,y,fontWidth,0, 2 * Math.PI);
    ctx.fillStyle = fontColor
    ctx.fill()
}
const drowLine = (x,y,x2,y2)=>{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = fontWidth * 2
    ctx.strokeStyle = fontColor
    ctx.stroke();
}


color.addEventListener("change",(e)=>{
    fontColor = e.target.value;
})
increase.addEventListener("click",()=>{
    if(fontWidth < 50){
        fontWidth += 5
        fontSize.value = fontWidth
    }
})
decrease.addEventListener("click",()=>{
    if(fontWidth > 5){
        fontWidth -= 5
        fontSize.value = fontWidth
    }
})
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canves.width, canves.height))