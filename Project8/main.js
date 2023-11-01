const usernameLabel = document.querySelector(".username label")
const passwordLabel = document.querySelector(".password label")

usernameLabel.innerHTML = usernameLabel.innerText
.split('')
.map((letter,idx)=>
`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')


passwordLabel.innerHTML = passwordLabel.innerText
.split('')
.map((letter,idx)=>
`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')