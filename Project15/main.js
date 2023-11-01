const followers = document.querySelectorAll('.followers')

followers.forEach(follower=>{
    follower.innerText = '0'
    const updateFollower = ()=>{
        const target =+ follower.getAttribute('data-target')
        const count =+ follower.innerText
        const increment = target / 300
        if(count < target) {
            follower.innerText = Math.ceil(count + increment)
            setTimeout(updateFollower, 1)
        } else {
            follower.innerText = target
        }
    }
    updateFollower()
})