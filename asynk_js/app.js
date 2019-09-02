const request = new XMLHttpRequest()

let getTodos = (resource, callback) =>{
    return new Promise((resolve, reject) =>{
        request.addEventListener('readystatechange' , () =>{
            if(request.status === 200 && request.readyState === 4){
                const data = JSON.parse(request.responseText)
                resolve(data)
            }
            else if(request.readyState === 4){
                reject("Could not find the address")
            }
        })
        request.open('GET', resource)
        request.send()    
    })
    
}
// Specifying a callback function
getTodos('todos/apple.json').then((data) =>{
    console.log("Promice 1 resolved")
    console.log(data)
    return getTodos('todos/mango.json')})
    .then(data =>{
        console.log("Promice 2 resolved")
        console.log(data)
        return getTodos('todos/orange.json')
    })
    .then(data =>{
        console.log("Promice 3 resolved")
        console.log(data)
    })
    .catch(() =>{
        console.log("Promice rejected")
})
