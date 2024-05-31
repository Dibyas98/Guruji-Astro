"use client"
import React, { useContext, useState } from 'react'
import Input from '../ui/Input'
import { GlobalContext } from '../context/GlobalProvider'


function Landing() {
    const[city,setCity] = useState('')
    const{HandelWeather,Error} = useContext(GlobalContext)
    console.log(Error);
    const handelClick=()=>{
           // CONDITION TO CHECK THE INPUT VALUE 
           if (city.trim().length == 0 || city.length == 0) return;

           // CALL FUNCTION TO GET API DATA 
           HandelWeather(city)
   
    }
    
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] h-screen xl:h-full flex  back flex-col items-center gap-5">
        <div className='w-full xl:w-1/3 px-10 h-10 flex gap-2'>
        <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity} ></Input>
        <button onClick={handelClick}>Search</button>
        </div>
        {Error && <h1 className='text-red-800  text-3xl capitalize font-semibold'>{Error}</h1>}
    </div>
  )
}

export default Landing