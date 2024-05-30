"use client";
import React, { useEffect } from 'react'

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
        setCity(event.target.value)
    }

    
    return (
        <input type={type} className={`border-2 w-full h-full rounded-sm  focus:outline-none p-1 ${style}`} placeholder={placeholder ? placeholder : ''} value={value ? value : ''} onChange={(event: any) => HandelInput(event)} />
    )
}
