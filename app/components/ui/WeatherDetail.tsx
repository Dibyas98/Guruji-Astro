"use client"
import React, { useEffect, useState } from 'react'
import { currentDay } from '../Function/TodayDay'
import Bar from './Bar'
import WeatherFull from './WeatherFull'
import WetherPercent from './WetherPercent'


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
                            <h1 className='text-3xl'>°C</h1>
                        </div>
                        <div>
                            <p className='text-2xl'>{day}</p>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <Bar style='h-[3px]'></Bar>
                    </div>
                    <div>
                        <WeatherFull detail={current.main} wind={current.wind}></WeatherFull>
                    </div>
                    <div className='w-full flex px-10 flex-col'>
                      <WetherPercent name='cloud' percent='80'></WetherPercent>
                      <WetherPercent name='Rain' percent='1'></WetherPercent>
                    </div>
                </section>
            }
        </>
    )
}

export default React.memo(WeatherDetail)