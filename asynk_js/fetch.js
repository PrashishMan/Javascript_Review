// fetch api

const getTodos = async () =>{
    const response = await fetch('./todos/apples.json')
    if(response.status == 200){
        const data = await response.json()
        return data
    }
    else{
        throw new Error("Cannot fetch the data")
    }
    
}


getTodos().then(res =>{
    console.log(res)
}).catch((error) =>{
    console.log("rejected", error)
})

// fetch('./todos/apple.json').then(data =>{
//     return data.json()
// })
// .then(res =>{
//     console.log("data : ",res)}
// )
// .catch((error) =>{
//     console.log("Rejected : ",error)
// })