const now = new Date()
console.log(dateFns.isToday(now))
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'do'))
console.log(dateFns.format(now, 'YYYY/MMMM/DD : dddd'))

const before = new Date('December 12 2019 12:00:00')
console.log(dateFns.distanceInWords(now, before, {addSuffix:true}))