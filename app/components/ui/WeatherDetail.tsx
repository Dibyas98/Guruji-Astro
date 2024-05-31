"use client"
import React, { useEffect, useState } from 'react'
import { currentDay } from '../Function/TodayDay'
import Bar from './Bar'
import WeatherFull from './WeatherFull'
import WetherPercent from './WetherPercent'
import { CloudRainWind,Cloudy  } from 'lucide-react';

function WeatherDetail({current}:any):React.ReactNode {

    // DAY INITIAL STATE DECLARED 
    const [day, setDay] = useState<String>('')

    // GET THE DATE FOR INITIAL RENDERING 
    useEffect(() => {
        const arg = currentDay();
        setDay(arg)
    }, [])

    return (
        <>
            {
                // IF DAY LENGTH IS GREATER THAN ZERO THE RENDER 
                
                day.length > 0 && <section className='max-w-full max-h-full flex flex-col items-center justify-center gap-5'>
                    <div className='font-normal text-7xl flex w-full px-8 xl:px-0 justify-center items-center gap-8'>
                        <div className='flex'>
                            <h1>{current.main.temp}</h1>
                            <h1 className='text-3xl text-red-500'>°C</h1>
                        </div>
                        <div>
                            <p className='text-2xl text-green-700'>{day}</p>
                            <h1 className='capitalize font-semibold text-sm'>{current.weather[0].description}</h1>
                        </div>
                    </div>
                    
                    <div className='w-full px-3'>
                        <Bar style='h-[3px]'></Bar>
                    </div>
                    <div>
                        <WeatherFull detail={current.main} wind={current.wind}></WeatherFull>
                    </div>
                    <div className='w-full flex px-10 flex-col gap-2'>
                     { current.clouds && <WetherPercent name='Cloud' percent={`${current.clouds.all} %`} icon={<Cloudy className='text-sky-600'/>}></WetherPercent>}
                      {current.rain && <WetherPercent name='Rain' percent={`${current.rain.all} %`} icon={<CloudRainWind  className='text-sky-600'/>}></WetherPercent>}
                    </div>
                </section>
            }
        </>
    )
}

export default React.memo(WeatherDetail)