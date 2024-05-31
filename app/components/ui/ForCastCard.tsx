import React from 'react'
import WeatherLogo from './WeatherLogo'

function ForCastCard({data,day}:any): React.ReactNode {
    return (
        <div className='bg-white w-24 xl:w-28 rounded-md flex flex-col items-center py-1 gap-0 flex-shrink-0 h-fit'>
            <h1 className='font-semibold md:text-sm'>{day}</h1>
            <div className='w-full'>
                <WeatherLogo icon={data.weather[0].icon} wid='100' hig='10'></WeatherLogo>
            </div>
            <h1 className='font-semibold'>{data.main.temp}°C</h1>
        </div>
    )
}

export default ForCastCard