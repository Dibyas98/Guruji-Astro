import React from 'react'

function Humidity({val}:any) {
  return (
    <div className='w-full flex flex-col gap-5 p-3 '>
        <h2 className='text-[#f3b8b8]'>Humidity</h2>
        <h1 className='text-4xl'>{val}%</h1>
        <p className='text-[#f3b8b8]'>{val<25?'Normal':val<=50?'Modrate':"High"}</p>
    </div>
  )
}

export default Humidity