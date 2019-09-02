const cityForm = document.querySelector(".change-location")
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) =>{

    // update details template
    // remove display none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

    // destructure objects
    const {cityDetails, weather} = data
    
    const timeSrc = weather.IsDayTime?"img/day.svg":"img/night.svg"
    
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    console.log("icon course", iconSrc)
    icon.setAttribute('src', iconSrc)

    time.setAttribute('src', timeSrc)
    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5> 
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

}

const updateCity = async (city)=>{
    const cityDetails = await getCity(city)
    console.log(cityDetails.Key)
    const weather = await getCurrentCondition(cityDetails.Key)
    return { cityDetails, weather }
}


cityForm.addEventListener('submit', e=>{
    // prevent default action
    e.preventDefault()

    const city = cityForm.city.value.trim()
    // set local storage
    localStorage.setItem('city', city)
    cityForm.reset() 

    // update UI with new city
    updateCity(city).then(data =>updateUI(data)).catch(error =>console.log(error))
    
})

if(localStorage.city !== undefined){
    updateCity(localStorage.getItem('city')).then(data =>updateUI(data)).catch(error =>console.log(error))
}