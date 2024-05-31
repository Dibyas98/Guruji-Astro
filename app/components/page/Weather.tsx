"use client";
import React, { useContext, useState } from 'react'
import Input from '../ui/Input';
import { Search } from 'lucide-react';
import { GlobalContext } from '../context/GlobalProvider';
import WeatherLogo from '../ui/WeatherLogo';
import WeatherDetail from '../ui/WeatherDetail';

function Weather():React.ReactNode {

    // INITIALIZE CONTEXTHOOK TO HANDEL CITY 
    const { HandelWeather } = useContext(GlobalContext)



    // INITILIZE CITY VARIABLE FOR INPUT FORM 
    const [city, setCity] = useState('')

    // FORM SUBMIT FUNCTION 
    const HandelFormSubmit = (event: any) => {
        // TO PREVENT DEFALUT PROPERTY 
        event.preventDefault();

        // CONDITION TO CHECK THE INPUT VALUE 
        if (city.trim().length == 0 || city.length == 0) return;

        // CALL FUNCTION TO GET API DATA 
        HandelWeather(city)

    }




    return (
        <section className='w-full h-full flex flex-col xl:flex-row xl:rounded-lg' >
            <div className='w-full xl:w-4/12 py-2 bg-white rounded-t-xl xl:rounded-r-none xl:rounded-l-xl'>
                <form action="" className='w-full px-5 md:px-28' onSubmit={HandelFormSubmit}>
                    <div className='w-full h-full relative '>
                        <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity}></Input>
                        <div className='absolute  top-0 py-1 h-full left-2 '>
                            <Search className='' style={{ width: '60%' }} />
                        </div>
                    </div>
                </form>

                <main className='w-full'>
                    <div className='w-full '>
                        <WeatherLogo></WeatherLogo>

                    </div>
                    <div className='w-full'>
                        <WeatherDetail></WeatherDetail>
                    </div>
                </main>
            </div>
            <div className='bg-[#f6f5f5] w-full xl:w-8/12 xl:rounded-r-lg h-full'>

            </div>
        </section>
    )
}
export default React.memo(Weather)
