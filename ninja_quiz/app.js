const correctAns = ['B', 'B', 'B', 'B', 'B']
const form = document.querySelector(".quiz-form")

form.addEventListener('submit', e=>{
    e.preventDefault()
    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // Check answers
    userAnswers.forEach((ans, ind) =>{
        if(ans === correctAns[ind]){
            score += 25
        }
    })

    scrollTo(0, 0)

    const result = document.querySelector(".result")
    const resultPercent = document.querySelector(".resultPercent")
    resultPercent.textContent = score + '%'
    result.classList.remove('d-none')

    let output = 0

    const timer = setInterval(() =>{
        resultPercent.textContent = output + '%'
        if(output === score){
            clearInterval(timer)
        }
        else{
            output++
        }
    }, 10)

    console.log("Printing the score")
    console.log(score)
})

// setTimeout(() =>{

// }, 3000)
// let i = 0
// const timer = setInterval(() =>{
//     console.log("Hello")
//     i++
//     if(i === 5){
//         clearInterval(timer)
//     }
//     console.log("Hello")
// }, 1000)