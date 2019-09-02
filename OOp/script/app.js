
class User{
    constructor(username, email){
        // set up properties in the object
        this.username = username
        this.email = email

    }
    login(){
        console.log(`Username : ${this.username} just logged in`)
        return this
    }

    setEmail(email){
        this.email = email
    }

    getEmail(){
        console.log(`Email : ${this.email}`)
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email)
        this.title = title
    }
    deleteUser(user){
        users = users.filter(u =>u.username !== user.username)
        return users
    }

}



const userThree = new Admin("Orange", "Orange@gmail.com", "Dep Head")

let users = [userOne, userTwo, userThree]

userOne.login().getEmail()
userThree.login().getEmail()


console.log(users)
userThree.deleteUser(userTwo)
console.log(users)

// userOne.setEmail("Prashish@gmail.com")
// userTwo.login()

// userOne.getEmail()
// userTwo.getEmail()

console.log(userThree)