"use client"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Input from '../ui/Input'
import { GlobalContext } from '../context/GlobalProvider'
import { SearchApi } from '../Function/ApiCall'
import List from '../ui/List'
import { env } from 'process'


function Landing() {
  const [city, setCity] = useState<null | any >(null)
  const { HandelWeather, Error,CityList,setCityList  } = useContext(GlobalContext)

  const handleClick = useCallback((arg: string) => {
    // CONDITION TO CHECK THE INPUT VALUE
    if (!city.trim()) return

    // CALL FUNCTION TO GET API DATA
    setCity(arg)
    HandelWeather(arg)
  }, [city, HandelWeather])





  useEffect(() => {
    const handelOnChange = async () => {

      const lis = await SearchApi(city)
    }
    handelOnChange()
  }, [city])
 
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] h-screen xl:h-full flex  back flex-col items-center gap-5">
      <div className='w-full xl:w-2/3 px-10 h-10 flex gap-2'>
        <div className='xl:w-full'>
          <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity} ></Input>
          <ul className='px-1 bg-white rounded-b-lg border-x-2'>
            {
              CityList && city && CityList.map((ele:any,idx:number) => <List key={idx} data={ele} func={handleClick}></List>)
            }
          </ul>
        </div>
        <button className='button-3' onClick={()=>handleClick(city)}>Search</button>
      </div>
      {Error && <h1 className='text-red-800  text-3xl capitalize font-semibold'>{Error}</h1>}
    </div>
  )
}

export default Landing