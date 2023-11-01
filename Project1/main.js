const container = document.querySelector('#Container')
const loader = document.querySelector('.loaderContainer')
var tags = ''
// function decleare 
const clearSliderClass = (sliders)=>{
    sliders.forEach((slider)=>{
        slider.classList.remove("active")
    })
}
const clearTitlesClass = (titles)=>{
    titles.forEach((title)=>{
        title.classList.remove("titleActve")
    })
}
const fetchImages = async()=>{
    var index  = 0
    while(index < 5){
        await fetch(`https://api.pexels.com/v1/photos/${Math.floor(Math.random()*10000000)}`,{
            headers:{
                Authorization:"2eAG5wPOaPTTdDfPYTWeY9HZHBCTHPVPunZYxB9rUNJ9oRcTb2yLhSZ7"
            }
        })
        .then((res)=>res.json())
        .then(data=>{
            if(data.id){
                index ++;
                return(
                tags += `
                <div id="slider" class="slide ${index === 1 ? "active" : ''}">
                <img src="${data.src.original}" alt="${data.alt}">
                <div class="imageTitle ${index === 1 ? "titleActve" : ''}">
                    <span>${data.alt}</span>
                </div>
                </div>`)
            }
        })
    }
}

fetchImages().then(()=>{
    container.innerHTML = tags
    const sliders = document.querySelectorAll('#slider')
    const titles = document.querySelectorAll('.imageTitle')
    sliders.forEach((slide,index)=>{
        slide.addEventListener('click',()=>{
            clearTitlesClass(titles)
            titles[index].classList.add("titleActve")
    
            clearSliderClass(sliders)
            slide.classList.add("active")
        })
    })
    setTimeout(() => {
        loader.remove()
    }, 10000);
})