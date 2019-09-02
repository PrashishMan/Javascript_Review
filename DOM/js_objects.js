let user = {
    name : "Prashish Man Singh",
    pets: ["Chinkey", "Lucy", "Smerp", "Sven"],
    fucn:function(){
        console.log("this is a function print")
    },
    getName:function(){
        console.log(this.name)
    },
    getPets:function(){
        console.log(this.pets)
    }

}

user.fucn()
user.getName()
user.getPets()