"use client";
import React, { useState } from 'react'
import { createContext } from "react";
import { Apicall, SearchApi } from '../Function/ApiCall';
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
  const [CityList, setCityList] = useState<null | any>(null)
  const [load,setload] = useState<boolean>(false)

  const HandelWeather = async (city: string) => {
    return route.push(`/weather/${city}`)

  }
  const HadelParams = async (city: string) => {
    try {
      // SET CURRENT WEATHER AND FORCAST TO NUJLL 
      setCurrentWeather(null);
      setForcast(null)
      setCityList(null)
      setload(true)
      // CALL API FUNCTION 
      const weatherData: any = await Apicall(city);
      if (weatherData.curr) {
        setCurrentWeather(weatherData.curr);
        setForcast(weatherData.forcast.list.splice(0, 7))
        setError(null)
        setload(false)
      }
      if (weatherData.response.status == 404) {
        setError(weatherData.response.data.message)
        setload(false)
        route.push('/')
      }



    } catch (error: any) {
      //  SET ERROR 


    }
  }


  const handelOnChange = async (city:string) => {

    const lis = await SearchApi(city)

  }


  return (
    <GlobalContext.Provider value={{ HandelWeather, currentWeather, Forcast, HadelParams, Error,CityList,setCityList,load }}>
      {children}
    </GlobalContext.Provider>
  )
}
