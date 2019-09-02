// Construction function
function User(username, email){
    this.username = username
    this.email = email

}

function Admin(username, email, title){
    // context, parameters
    User.call(this, username, email)
    this.title = title

}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.deleteUser = function(){
    // delete user
}

// Attaching methods to the prototype
User.prototype.login=function(){
    console.log(`${this.username} has logged in`)
}

// Attaching methods to the prototype
User.prototype.logout=function(){
    console.log(`${this.username} has logged out`)
}

User.prototype.getUser=function(){
    console.log(`${this.username} is the user`)
}

const userOne = new User("Apple", "Apple@gmail.com")
const userTwo = new User("Mango", "Mango@gmail.com")
const userThree = new Admin("Orange", "Orange@gmail.com", "Manager") 

userOne.login()
userOne.getUser()
userOne.logout()

console.log(userThree)
console.log(userOne)