import React from 'react'
import { ChevronsDown, ChevronsUp,Thermometer  } from 'lucide-react';
function MinMaxTemp() {
  return (
    <div className='w-full flex flex-col gap-5 p-3 text-[#cece48]'>
        <h2 className='text-[#f3b8b8]'>Min & Max Temp</h2>
        <div>
            <div >
            <ChevronsUp></ChevronsUp>
            <Thermometer></Thermometer>
            </div>
        </div>
        <div>
            <div>
            <ChevronsDown></ChevronsDown>
            <Thermometer></Thermometer>
            </div>
        </div>
    </div>
  )
}

export default MinMaxTemp