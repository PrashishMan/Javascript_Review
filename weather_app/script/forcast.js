const key = "XTijMpTEyf7BHXSVxNkYI36RAtQI5mOD"

// Get city information
const getCity = async (city) =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base+query)
    const data = await response.json()
    return data[0]
}

// getCity("kathmandu").then(data =>{
//     console.log("here .. ")
//     console.log(data.Key)
//     getCurrentCondition(data.Key)

// }).catch(error =>{console.log(error)})
 

// get weather information
const getCurrentCondition = async (locationKey)=>{
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`
    const query = `${locationKey}?apikey=${key}`
    const response = await fetch(base+query)
    const data = await response.json()
    return data[0]

}

// getCurrentCondition("329260")