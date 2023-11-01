const moviesApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const moviesApiByPage = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='
const searchMovies = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const main = document.querySelector('.main')
const search = document.querySelector('#search')

const modifiedMAin = (list)=>{
    return(
        `
        <div class="Movie">
            <img src="
            ${list.backdrop_path === null ?
            'https://images.alphacoders.com/769/76961.jpg':
            `https://image.tmdb.org/t/p/w1280/${list.backdrop_path}`}
            " alt="${list.title}">
            <div class="info">
                <div class="title">${list.title}</div>
                <div class="rate ${list.vote_average > 8 ? "top":''}">
                ${list.vote_average}</div>
            </div>
            <div class="sammary">
                <h2>overview</h2>
                <p>${list.overview}</p>
            </div>
        </div>
        `
)
}

const fetchMovies = async ()=>{
    await fetch(moviesApi)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.map((movie)=>{
            main.innerHTML += modifiedMAin(movie)
        })
    })
}
const fetchMoviesByNumPage = async (num)=>{
    await fetch(moviesApiByPage+num)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.map((movie)=>{
            main.innerHTML += modifiedMAin(movie)
        })
    })
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


const searchMovie = async(movie) =>{
    console.log(movie)
    await fetch(searchMovies+movie,{
        method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        data.results.map((movie)=>{
            main.innerHTML += modifiedMAin(movie)
        })
    })
}

search.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        searchMovie(e.target.value)
        search.value = ''
        main.innerHTML = ''
    }
})



fetchMovies()



const spans = document.querySelectorAll('.numbers span')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
var index = 0
if(index === 0){
    prev.classList.add('blockBtn')
}
const moveSlider = (num,state)=>{
    spans.forEach((span,index)=>{
        if(num === index && state === "increase"){
            span.classList.add('active')
        }else if(num+1 === index && state === "decrease"){
            span.classList.remove('active')
        }
    })
}

next.addEventListener('click',()=>{
    if(index < (spans.length-1)){
        index++
        if(prev.classList.contains('blockBtn')){
            prev.classList.remove('blockBtn')
        }
    }
    if(index === (spans.length-1)){
        next.classList.add('blockBtn')
    }
    moveSlider(index,"increase")
    main.innerHTML = ''
    fetchMoviesByNumPage(index+1)
})
prev.addEventListener('click',()=>{
    if(index !== 0){
        index--
        if(next.classList.contains('blockBtn')){
            next.classList.remove('blockBtn')
        }
    }
    if(index === 0){
        prev.classList.add('blockBtn')
    }
    moveSlider(index,"decrease")
    main.innerHTML = ''
    fetchMoviesByNumPage(index+1)
})