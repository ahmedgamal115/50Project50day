const inputUser = document.querySelector('#inputUser')
const container = document.querySelector(".container")
// https://api.github.com/users/ahmedgamal115/repos

const Token = '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'



const fetchData = async(username) =>{
    let accountData = {}
    let reposData = {}
    await fetch(`https://api.github.com/users/${username}`,{
        method:"GET",
        auth: Token,
    })
    .then((res)=>res.json())
    .then(async(data)=>{
        accountData = data
        await fetchRepo(data.repos_url).then((results)=>{
            reposData = results
        })
    })
    // console.log(reposData)
    handelData(accountData,reposData)
}

const fetchRepo = async(repoUrl)=>{
    let reposData = {}
    await fetch(repoUrl,{
        method:"GET",
        auth: Token,
    })
    .then((res)=>res.json())
    .then((data)=>{
        reposData = data
    })
    return reposData
}

const handelData = (accountData,reposData)=>{
    let list = ''
    reposData.map((repo,idx)=>{
        if(idx < 4){
            list += `<li><a href="${repo.html_url}">${repo.name}</a></li>`
        }
    })
    const card = document.createElement('div')
    card.classList.add("card")
    card.innerHTML = `
        <div class="accountImage">
            <img src="${accountData.avatar_url}" alt="">
        </div>
        <div class="info">
            <div class="accountInfo">
                <div class="name">${accountData.name}</div>
                <div class="bio">${accountData.bio}</div>
                <div class="numbers">
                    <ul>
                        <li>
                            <div class="num">${accountData.followers}</div>
                            <div class="label">Followers</div>
                        </li>
                        <li>
                            <div class="num">${accountData.following}</div>
                            <div class="label">Following</div>
                        </li>
                        <li>
                            <div class="num">${accountData.public_repos}</div>
                            <div class="label">Repos</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="reposInfo">
                <ul>
                    ${list}
                </ul>
            </div>
        </div>
    `
    container.appendChild(card)
    inputUser.value = ''
}

inputUser.addEventListener("keyup",(e)=>{
    console.log(e.key)
    if(e.key === "Enter"){
        if(container.children[1]){
            container.children[1].remove()
        }
        fetchData(e.target.value)
    }
})