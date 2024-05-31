'use client';
import { GlobalContext } from '@/app/components/context/GlobalProvider';
import Weather from '@/app/components/page/Weather';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

function page() {
  const {HadelParams,currentWeather} = useContext(GlobalContext)
  const params = useParams()
  useEffect(()=>{
    HadelParams(params.city)
  },[])
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] xl:h-screen">
        {currentWeather && <Weather place={params.city}></Weather>}
    </div>
  )
}

export default page