import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [search, setSearch] = useState('')
    const [weatherData, setWeatherData] = useState({})

    const weatherApi = {
        key: 'c1da7dd60b7946266fdcb9a99612d851',
        url: 'https://api.openweathermap.org/data/2.5/'
    }

    useEffect(() => {
        fetch(`${weatherApi.url}forecast?lat=${51.5085}&lon=${-0.1257}&appid=${weatherApi.key}`)
            .then((res) => res.json())
            .then((result) => {
                if (result.message == 'city not found') {
                    alert('city not foud')
                } else {
                    setWeatherData(result);
                }
            });
    }, [])

    const performSearch = () => {

        fetch(`${weatherApi.url}forecast?q=${search}&appid=${weatherApi.key}`)
            .then((res) => res.json())
            .then((result) => {
                if (result.message == 'city not found') {
                    alert('city not foud')
                } else {
                    if(search.length > 0) {
                        setWeatherData(result);
                    } else {
                        alert('enter a City')
                    }
                    
                }
            });

    }

    if (Object.keys(weatherData).length > 0) {
        console.log(weatherData)
    }


    return (

        <div className='dashboard'>
            <div className='cityANDsearch d-flex flex-sm-row flex-column-reverse   justify-content-between m-5 p-2 mb-4'>
                <div className='city'>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{Object.keys(weatherData).length > 0 ? weatherData.city.name : 'loading...'}</span>
                    <p className='m-0'>{`${Object.keys(weatherData).length > 0 ? weatherData.city.coord.lat + ' ' + weatherData.city.coord.lon : ''}`}</p>
                </div>
                <div className='search d-flex align-content-center'>
                    <i className="fa-solid fa-magnifying-glass align-self-center" ></i>
                    <input type='search' onChange={(e) => setSearch(e.target.value)} placeholder='search your city here' className='align-self-center' />
                    <button className='searchButton align-self-center ' onClick={performSearch}>Search</button>
                </div>
            </div>
            <div className='wheatherData d-flex mx-5 my-4 p-2 '>
                <div className='data d-flex flex-column gap-3'>
                    <div className='d-flex flex-column'>
                        <span>select date</span>
                        <input type='date' />
                    </div>
                    <span>High Temperature</span>
                    <span>Low Temperature</span>
                    <span>Humidity</span>
                    <span>Sunrise Time</span>
                    <span>Sunset Time</span>
                </div>
                <div className='weatherDivs d-flex ps-5 text-center gap-4'>
                    {

                        Object.keys(weatherData).length > 0 ? (
                            [1, 9, 17, 25, 33,].map((index) => {

                                const selectedArray = weatherData.list[index];
                                console.log(selectedArray);

                                return (
                                    <div className='weatherDiv' key={index}>
                                        <span className=''>{selectedArray.dt_txt.slice(0, 10)}</span>
                                        <div className='text-white weatherCARD'>
                                            <div className='weatherState d-flex justify-content-between  align-content-center '>

                                                <img src={`/src/assets/${selectedArray.weather[0].main}.png`} alt="" />
                                                <span className='align-self-center w-50'>{selectedArray.weather[0].main}</span>
                                            </div>
                                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                                <span>{(selectedArray.main.temp_max - 273.15).toFixed(0) + '°C'} / {((((selectedArray.main.temp_max - 273.15) * 9) / 5) + 32).toFixed(0) + '°F'}</span>
                                                <span>{(selectedArray.main.temp_min - 273.15).toFixed(0) + '°C'} / {((((selectedArray.main.temp_min - 273.15) * 9) / 5) + 32).toFixed(0) + '°F'}</span>
                                                <span>{selectedArray.main.humidity + '%'}</span>
                                                <span>{new Date(weatherData.city.sunrise * 1000).toString().slice(15, 21) + ' AM'}</span>
                                                <span>{new Date(weatherData.city.sunset * 1000).toString().slice(15, 21) + ' PM'}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>loading...</p>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
