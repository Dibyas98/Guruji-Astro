"use client"
import React, { useEffect, useState } from 'react'
import { currentDay } from '../Function/TodayDay'

function WeatherDetail() {

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
                
                day.length > 0 && <section className='max-w-full max-h-full flex flex-col items-center justify-center'>
                    <div className='font-normal text-7xl flex w-full px-8 xl:px-0 xl:justify-center items-center gap-8'>
                        <div className='flex'>
                            <h1>12</h1>
                            <h1 className='text-4xl'>°C</h1>
                        </div>
                        <div>
                            <p className='text-3xl'>{day}</p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default React.memo(WeatherDetail)