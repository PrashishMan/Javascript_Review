// const scores = [10, 20, 60, 40, 70, 90, 30]
// // How many scores are over 50

// // acc : Running total
// // curr : value
// const result = scores.reduce((acc, curr) =>{
//     if(curr > 50){
//         acc++
//     }
//     return acc
// }, 
// // Initial value to the accumulator 
// 0)

// console.log(result)

const scores = [
    {player : "Mario", score : 40},
    {player : "Luigi", score : 50},
    {player : "Apple", score : 60},
    {player : "Mario", score : 10},
    {player : "Luigi", score : 70}
]

const marioTotal = scores.reduce((acc, curr) =>{
    if(curr.player ==='Mario'){
        acc += curr.score
    }
    return acc
}, 0)


console.log("Mario Total : ", marioTotal)

