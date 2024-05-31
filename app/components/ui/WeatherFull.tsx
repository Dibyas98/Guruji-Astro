import React from 'react'

function WeatherFull({detail,wind}:any) {
    
  return (
    <section className='w-full flex gap-16 font-medium'>
        <div>
            <p>Feel Like</p>
            <p>Wind</p>
            <p>Humidity</p>
            <p>Pressure</p>
        </div>
        <div>
            <p>{detail.feels_like} °C</p>
            <p>{wind.speed} m/s</p>
            <p>{detail.humidity} %</p>
            <p>{detail.pressure} hPa</p>
        </div>
    </section> 
  )
}

export default React.memo(WeatherFull)