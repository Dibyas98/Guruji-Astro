import React from 'react'
interface propstype {
    name:string;
    percent: string;
    icon: React.ReactNode;
}

function WetherPercent({name,percent,icon}:propstype): React.ReactNode {
    return (
        <div className='flex  gap-6 font-bold '>
            <div className='text-blue'>{icon}</div>
            <h1 className='w-14'>{name}</h1>
            <span className='font-medium'>{percent}</span>
        </div>
    )
}

export default WetherPercent