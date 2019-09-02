// Sorting strings
const names = ["Apple", "Mango", "Orange", "Banana"]

// sort in descending order
names.sort()
names.reverse()
console.log(names)
// Sorting numbers
const scores1 = [10, 50, 20, 5, 35, 70, 45]
scores1.sort()
scores1.reverse()
console.log(scores1)
// Sorting objects
const scores2 = [
    {name : "Apple", score : 10},
    {name : "Mango", score : 40},
    {name : "Banana", score : 60},
    {name : "Orange", score : 20},
    {name : "Papaya", score : 20}
]

// a ,b represent two consecutive object in a array
// scores2.sort((a, b) =>{
//     if(a.score > b.score){
//         return -1
//     }
//     else if(b.score > a.score){
//         return 1
//     }
//     else{
//         return 0
//     }
// })


// Short version
scores2.sort((a, b) =>{
    return b.score - a.score
})

console.log("there")
console.log(scores2)
