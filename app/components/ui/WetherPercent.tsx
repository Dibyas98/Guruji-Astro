import React from 'react'
interface propstype {
    name:string;
    percent: string
}

function WetherPercent({name,percent}:propstype): React.ReactNode {
    return (
        <div className='flex  gap-6 font-bold '>
            <h1 className='w-14'>{name}</h1>
            <span className='font-medium'>{percent}</span>
        </div>
    )
}

export default WetherPercent