const cover = document.querySelector('.cover')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')
const userAvater = document.querySelector('.userAvater')
const username = document.querySelector('.username')
const date = document.querySelector('.date')

const loadData = () =>{
    cover.classList.remove("animation-bg")
    userAvater.classList.remove("animation-bg")
    title.classList.remove("animation-bg-text")
    username.classList.remove("animation-bg-text")
    date.classList.remove("animation-bg-text")

    cover.innerHTML = `<img src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="programming"/>`
    userAvater.innerHTML = `<img src="https://images.pexels.com/photos/4205570/pexels-photo-4205570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile"/>`
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    desc.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    username.innerHTML = 'coach jerryking'
    date.innerHTML = 'Oct 08, 2020'
}

setTimeout(() => {
    loadData()
}, 3000);
