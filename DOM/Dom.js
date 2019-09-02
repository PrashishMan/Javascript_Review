const para = document.querySelector('.container > .ai')
const paras = document.querySelectorAll('.container > p')
paras.forEach(para =>{
    console.log(para)
})

// get element by ID
const user = document.getElementById('user')
console.log(user)

const container = document.getElementsByClassName("container")
console.log(container)

const tags = document.getElementsByTagName("h1")
console.log(tags)

container.forEach(error =>{
    console.log(error)
})

