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
  const [Forcast, setForcast] = useState<null | any>(null)

  const HandelWeather = async (city: string) => {
    return route.push(`/weather/${city}`)

  }
  const HadelParams = async (city: string) => {
    try {
      // SET CURRENT WEATHER AND FORCAST TO NUJLL 
      setCurrentWeather(null);
      setForcast(null)

      // CALL API FUNCTION 
      const weatherData: any = await Apicall(city);
      console.log(weatherData);
      if (weatherData.curr) {
        setCurrentWeather(weatherData.curr);
        setForcast(weatherData.forcast.list.splice(0, 7))
        setError(null)
      }
      if (weatherData.response.status == 404) {
        setError(weatherData.response.data.message)
        route.push('/')
      }



    } catch (error: any) {
      //  SET ERROR 


    }
  }


  return (
    <GlobalContext.Provider value={{ HandelWeather, currentWeather, Forcast, HadelParams, Error }}>
      {children}
    </GlobalContext.Provider>
  )
}
