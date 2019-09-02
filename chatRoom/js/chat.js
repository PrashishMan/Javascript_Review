// adding new chat document


// setting up a real time listener to get new chats
// updating the username
// updating the room


class ChatRoom{
    constructor(room, username){
        this.room = room
        this.username = username
        this.chats = db.collection('chats')
        this.unSub
    }

    async addChat(message){
        // format a chat message
        const now = new Date()
        const chat = {
            message,
            "username" : this.username,
            "created_at" : firebase.firestore.Timestamp.fromDate(now),
            "room" : this.room
        }
        // save the chat document
        const response = await this.chats.add(chat)
        return response
    }

    getChats(callback){
        this.unSub = this.chats
        .where('room', '==', this.room)
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(item =>{
                if(item.type === 'added'){
                    callback(item.doc.data())
                }
            })
        })
    }

    updateName(username){
        this.username = username
    }

    updateRoom(room){
        this.room = room
        if(this.unSub){
            this.unSub()
        }        
        console.log("Room updated")
    }
}

const chatRoom = new ChatRoom("Gaming", "Prashish")  
// chatRoom.addChat("Hello Any body there").then(res =>{
//     console.log("Chat added")
//     console.log(res)
// }).catch(error =>{
//     console.log(error)
// })

chatRoom.getChats((data) =>{
    console.log("data", data)
})



setTimeout(() =>{
    chatRoom.updateRoom("General")
    chatRoom.updateName("Apple")
    chatRoom.getChats((data) =>{
        console.log("data", data)
    })

    // chatRoom.addChat("Hello Any body there")
    // .then(res =>{console.log("Chat added")})
    // .catch(error =>{
    //     console.log(error)
    // })
    
}, 3000)