const clock = document.querySelector('.clock');
const tick = ()=>{
    const now = new Date()
    const hrs = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    clock.innerHTML = `
        <span>${hrs}</span>&nbsp:&nbsp<span>${min} </span>&nbsp:&nbsp<span>${sec}</span>
        
        `
}

setInterval(tick, 1000)

