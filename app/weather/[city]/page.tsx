'use client';
import Weather from '@/app/components/page/Weather';
import React from 'react'

function page() {
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] xl:h-screen">
        <Weather></Weather>
    </div>
  )
}

export default page