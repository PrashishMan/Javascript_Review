const before = new Date('Feb 1 2019 10:10:10')
const now = new Date()


console.log(before.getFullYear())
console.log(before.getMonth())

console.log(`${now.getTime()} - ${before.getTime()}`)
const diff = now.getTime() - before.getTime()

const mins = Math.round(diff/1000/60)
const hours = Math.round(mins/60)
const days = Math.round(hours/24)
console.log(`Hours : ${hours} : Minutes :${mins} : Days : ${days}`)

// Converting timestamps to date objects
const timestamps = 12312132312
console.log(new Date(timestamps))