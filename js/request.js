const KEY = 'e255ed00fab1fb656e7002110c7d3420'

const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const request = await fetch(base + query)
    const data = await request.json()
    loader(false)

    return data
}

