// dates and times
const now = new Date()
console.log(now)
console.log(typeof now)

// years, month, day, time
console.log("Full year", now.getFullYear())
console.log("Month : ", now.getMonth())
console.log("Day : ", now.getDay())
console.log("hours", now.getHours())
console.log("minutes : ", now.getMinutes())
console.log("seconds : ", now.getSeconds())

// timestamps
console.log("Timestamp : ", now.getTime())

// date strings
console.log("Date : " ,now.toDateString())
console.log("Time : ",now.toTimeString())
console.log("Local : ",now.toLocaleString())