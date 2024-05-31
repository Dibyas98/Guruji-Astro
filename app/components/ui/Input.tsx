"use client";
import React, { useEffect } from 'react'
import { log } from 'util';

// PROPS TYPE DECLARED FROM PARENTS
interface propstype {
    type: string;
    style: string;
    placeholder: string;
    value: any;
    setCity: any;
}



export default function Input({ type, style, placeholder, value, setCity }: propstype) {

    // CHANGE THE VALUE OF INPUT IN ONCHANGE-EVENT 
    const HandelInput = (event: any) => {
        // setCity(event.target.value)
        let timer;
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            setCity(event.target.value)
            
        }, 1000);
    }

    
    return (
        <input type={type} className={`border-2 w-full h-full rounded-sm  focus:outline-none p-1 ${style}`} placeholder={placeholder ? placeholder : ''} onChange={(event: any) => HandelInput(event)} />
    )
}
