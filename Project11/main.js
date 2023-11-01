const container = document.querySelector('.container')
const loaded = document.querySelector('.loaded')

document.addEventListener('keyup',(e)=>{
    loaded.remove()
    container.innerHTML = 
    `
    <div class="dataBtn">
    <div class="title">event.key</div>
    <div class="value">
        ${e.key}
    </div>
    </div>
    <div class="dataBtn">
        <div class="title">event.keyCode</div>
        <div class="value">
            ${e.keyCode}
        </div>
    </div>
    <div class="dataBtn">
        <div class="title">event.Code</div>
        <div class="value">
            ${e.code}
        </div>
    </div>
    `
})