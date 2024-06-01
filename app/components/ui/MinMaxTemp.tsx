import React from 'react'
import { ChevronsDown, ChevronsUp, Thermometer } from 'lucide-react';
function MinMaxTemp({temp}:any):React.ReactNode {
    return (
        <div className='w-full flex flex-col gap-5 p-3 text-[#cece48]'>
            <h2 className='text-[#f3b8b8]'>Min & Max Temp</h2>
            <div className='flex xl:gap-7'>
                <div className='flex '>
                    <ChevronsUp></ChevronsUp>
                    <Thermometer></Thermometer>
                </div>
                <p className='text-sky-400'>{temp.temp_max} °C</p>
            </div>
            <div className='flex xl:gap-7'>
                <div className='flex'>
                    <ChevronsDown></ChevronsDown>
                    <Thermometer></Thermometer>
                </div>
                <p className='text-sky-400'>{temp.temp_min} °C</p>
            </div>
        </div>
    )
}

export default MinMaxTemp