const scores = [10, 30, 15, 25, 50, 40, 5]
const users = [
    {name : "Apple", premium : false},
    {name : "Mango", premium : true},
    {name : "Orange", premium : false},
    {name : "Banana", premium : true}

]

let items = scores.filter(score =>{
    return score > 20
})

let userList = users.filter(user =>{
    return user.premium
})

console.log("Printing the items")
console.log(items)

console.log("Printing the users list")
console.log(userList)