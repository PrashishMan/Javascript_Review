// Store in local storage
localStorage.setItem('name', 'prashish')
localStorage.setItem('age', 10)

// update data 
localStorage.setItem('name', 'Apple')
let name = localStorage.getItem('name')

localStorage.age = 50

let age = localStorage.getItem('age')

console.log(name +" " + age)
// deleting data from local storage
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))


// remove all item from local storage
localStorage.clear()
console.log(localStorage.getItem('name'),localStorage.getItem('age'))

// Storing arrays in local storage
const todos = [
    {text : "play cs go", author:"apple"},
    {text : "play dota", author:"mango"},
    {text : "play pubg", author:"orange"}
]
// converting array to string
const stringArray = JSON.stringify(todos)
localStorage.setItem('jsonArray', stringArray)

// converting to an array from json string
const arrayString = JSON.parse(localStorage.getItem('jsonArray'))
console.log(arrayString)