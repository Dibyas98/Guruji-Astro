"use client"
import React, { useContext, useState } from 'react'
import Input from '../ui/Input'
import { GlobalContext } from '../context/GlobalProvider'


function Landing() {
    const[city,setCity] = useState('')
    const{HandelWeather} = useContext(GlobalContext)
    const handelClick=()=>{
           // CONDITION TO CHECK THE INPUT VALUE 
           if (city.trim().length == 0 || city.length == 0) return;

           // CALL FUNCTION TO GET API DATA 
           HandelWeather(city)
   
    }
    
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] xl:h-full flex justify-center back">
        <div className='w-1/3 px-10 h-10 flex gap-2'>
        <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity} ></Input>
        <button onClick={handelClick}>Search</button>
        </div>
    </div>
  )
}

export default Landing