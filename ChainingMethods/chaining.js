const scores = [
    {name : "Apple", score : 10},
    {name : "Mango", score : 40},
    {name : "Banana", score : 60},
    {name : "Orange", score : 20},
    {name : "Papaya", score : 20}
]

const filtered = scores.filter(score =>{return score.score > 10})
filtered.sort((a, b) =>{return b.score - a.score})
console.log(filtered)

const proms = filtered.map(product =>{
    return ` product : ${product.name}`
})

const promos = scores.filter(score => score.score > 10)
                .sort((a, b) =>b.score - a.score)
                .map(item => item.name)
console.log(promos)