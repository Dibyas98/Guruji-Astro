"use client";
import React, { useContext, useState } from 'react'
import Input from '../ui/Input';
import { Search } from 'lucide-react';
import { GlobalContext } from '../context/GlobalProvider';
function Weather() {

    // INITIALIZE CONTEXTHOOK TO HANDEL CITY 
    const {HandelWeather} = useContext(GlobalContext)



    // INITILIZE CITY VARIABLE FOR INPUT FORM 
    const[city,setCity] = useState('')

    const HandelFormSubmit= (event:any)=>{
        event.preventDefault();
        if(city.trim().length==0 || city.length==0 ) return;
        HandelWeather(city)
        
    }
    
    


    return (
        <div className='w-full h-full flex flex-col xl:flex-row xl:rounded-lg' >
            <div className='w-full xl:w-4/12 py-2 bg-white rounded-t-xl xl:rounded-r-none xl:rounded-l-xl'>
                <form action="" className='w-full px-5 md:px-28'  onSubmit={HandelFormSubmit}>
                    <div className='w-full h-full relative '>
                        <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity}></Input>
                        <div className='absolute  top-0 py-1 h-full left-2 '>
                            <Search  className='' style={{width:'60%'}}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className='bg-[#f6f5f5] w-full xl:w-8/12 xl:rounded-r-lg h-full'>

            </div>
        </div>
    )
}
export default React.memo(Weather)
