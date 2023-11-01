const boxs = document.querySelectorAll(".data")
var lastBox = ''

const dragBoxStart = (e,box) => {
    box.firstElementChild.style.opacity = 0
    if(box.innerHTML !== ''){
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html',box.innerHTML)
    }
    lastBox = box
}
const dragBoxEnter = (box) => {
    box.style.border = '3px dashed white'
    box.style.background = 'black'
}
const dragBoxLeave = (box) => {
    box.style.border = '3px solid black'
    box.style.background = 'white'
}
const handleDragOver = (e) => {
    e.preventDefault();
    return false;
  }
const dropBox = (e,box) => {
    e.preventDefault();
    box.style.border = '3px solid black'
    box.innerHTML = e.dataTransfer.getData('text/html')
    box.firstElementChild.style.opacity = 1
    if(box !== lastBox){
        lastBox.innerHTML = ''
    }
}




boxs.forEach(box=>{
    box.addEventListener("dragstart",(e)=>{dragBoxStart(e,box)})
    box.addEventListener("dragenter",()=>{dragBoxEnter(box)})
    box.addEventListener("dragleave",()=>{dragBoxLeave(box)})
    box.addEventListener('dragover', (e)=>{handleDragOver(e)});
    box.addEventListener("drop",(e)=>{dropBox(e,box)})
})

