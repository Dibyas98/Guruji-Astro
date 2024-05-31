import React from 'react'
import { Sunrise ,Sunset } from 'lucide-react';
import { convertToIST, sunriseIST } from '../Function/Timestamp';

function SunTime({time}:any):React.ReactNode {
    
  return (
    <div className='w-full flex flex-col gap-5 p-3 text-[#cece48]'>
        <h2 className='text-[#f3b8b8]'>Sunrise & Sunset</h2>
        <div  className='flex items-center justify-between'>
            <Sunrise className='w-10 h-10'></Sunrise>
            <p className='text-black font-semibold uppercase'>{convertToIST(time.sunrise)}</p>
        </div>
        <div className='flex items-center justify-between'>
            <Sunset  className='w-10 h-10'></Sunset>
            <p className='text-black font-semibold uppercase'>{convertToIST(time.sunset)}</p>
        </div>
    </div>
  )
}

export default SunTime