"use client";
import React, { useState } from 'react'
import { createContext } from "react";
import { Apicall } from '../Function/ApiCall';


// TYPE OF GLOBALCONTEXT
interface str {
    [x:string]:any
}


// CREATE GLOBAL CONTEXT 
export const GlobalContext = createContext({} as str);


export default function GlobalProvider({children}:{children:React.ReactNode}) {

  const[Error,setError] = useState<any | null>(null)

  const HandelWeather = async(city:string)=>{
      try {
        const weatherData = await Apicall(city);
        console.log(weatherData);
      } catch (error) {

        setError(error)
      }
      
      
  }
  return (
    <GlobalContext.Provider value={{HandelWeather}}>
        {children}
    </GlobalContext.Provider>
  )
}
