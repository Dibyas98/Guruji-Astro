"use client";
import React, { useState } from 'react'
import { createContext } from "react";
import { Apicall } from '../Function/ApiCall';
import { useRouter } from 'next/navigation';


// TYPE OF GLOBALCONTEXT
interface str {
  [x: string]: any
}


// CREATE GLOBAL CONTEXT 
export const GlobalContext = createContext({} as str);


export default function GlobalProvider({ children }: { children: React.ReactNode }) {

  const route = useRouter();
  const [Error, setError] = useState<any | null>(null)
  const [currentWeather, setCurrentWeather] = useState<null | any>(null)

  const HandelWeather = async (city: string) => {
    try {
      setCurrentWeather(null);
      const weatherData = await Apicall(city);
      setCurrentWeather(weatherData);
      // return route.push(`/weather/${city}`)

    } catch (error) {

      setError(error)
    }


  }
  const pri = (arg:string)=>{
    console.log(arg);
    
  }

  return (
    <GlobalContext.Provider value={{ HandelWeather, currentWeather, pri }}>
      {children}
    </GlobalContext.Provider>
  )
}
