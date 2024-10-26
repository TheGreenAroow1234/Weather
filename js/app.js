const changeLocation = document.getElementById('changeLocation')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weatherIcon')
const overlay = document.getElementById('overlay')

changeLocation.city.focus()

function loader(params){
    if(params) {
       overlay.classList.remove('d-none') 
    }
    else(
        overlay.classList.add('d-none')
    )
}

const appUI = (weather)=>{
    console.log(weather);
    
    details.innerHTML = `
    <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3">
    <span>${Math.round(weather.main.temp)}</span>
    <span>&deg;C</span>
    </div>`

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

const getWeather = async (city) =>{
    const data = await getData(city)
    return data
}

changeLocation.addEventListener('submit', (e)=>{
    e.preventDefault()

    const cityName  = changeLocation.city.value.trim()
    
    getWeather(cityName).then((data) => appUI(data))
    changeLocation.reset()
})

