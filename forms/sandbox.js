const form = document.querySelector(".signup-class")
// const username = document.querySelector('#username')
const feedback = document.querySelector(".feedback")
const usernamePattern = /^[a-zA-Z]{6,12}$/
form.addEventListener('submit', e =>{
    e.preventDefault()
    console.log(form.username.value)

    // validation
    
    const username = form.username.value
    
    if(usernamePattern.test(username)){
        const validation  = usernamePattern.test(username)
        feedback.textContent = "Valid username"
    }else{
        feedback.textContent="Invalid username"
    }
})

// Live feedback
form.username.addEventListener('keyup', e=>{
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success')
    }else{
        form.username.setAttribute('class', 'failed')1
    }
})



// testing regex

// let result = username.search(pattern)
