const para = document.querySelector('p')
console.log(para.innerText)

para.innerText += " Django Programmer"
console.log(para.innerText)


const paras = document.querySelectorAll('p')
paras.forEach(para =>{
    para.innerText += " new Text"
    console.log(para.innerText)
})


const content = document.querySelector('#user')
console.log(content.innerHTML)
content.innerHTML = "<H2>Is This is Prashish Man Singh</H2>"

const people = ["Apple", "Mango", "Orange"]
people.forEach(people =>{
    content.innerHTML+= `<p>${people}</p>`
})

const link = document.querySelector('a')
console.log("Printing the link attribute")
console.log(link.getAttribute('href'))

link.setAttribute("href", "https://www.facebook.com")
link.innerText = "Facebook"
link.setAttribute('style', "color:green")

const app = document.querySelector("#app")
app.addEventListener('click', e =>{
    console.log("Target : ", e.target.tagName)
    if(e.target.tagName === "LI"){
        e.target.remove()
    }
})

const copyItem = document.querySelector("#copyItem")
copyItem.addEventListener('copy', () =>{
    console.log("Item copied")
})

// const items = document.querySelectorAll("li")
// items.forEach(item => {
//     item.addEventListener('click', e =>{
//         e.target.remove()
//         // Stops event bubbling
//         e.stopPropagation()
//     })    
// });

const addFruit = document.querySelector("#addFruit")
addFruit.addEventListener('click', e =>{
    const li = document.createElement('li')
    li.textContent = "Fruits"
    app.prepend(li)
})

content.style.color = "Red"
content.style.margin = "200px";
content.style.fontSize = "24px"
content.style.margin=""

content.classList.add("error")

const error = document.querySelector(".error")
error.style.color = "Green"

const box = document.querySelector("#mouseMove")
box.addEventListener('mousemove', e =>{
    // console.log("x : ", e.offsetX)
    // console.log("y : ", e.offsetY)
    box.textContent=`X pos : ${e.offsetX} Y pos : ${e.offsetY}`
})

document.addEventListener('wheel', e =>{
    console.log(e.pageX)
    console.log(e.pageY)

})

const popup = document.querySelector('#popup-wrapper')

const popBtn = document.querySelector('#pop')
popBtn.addEventListener('click', ()=>{
    popup.style.display = 'block'
})

const closeBtn = document.querySelector('#popup-close')
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none'
})