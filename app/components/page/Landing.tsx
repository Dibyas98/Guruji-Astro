"use client"
import React, { useContext, useEffect, useState } from 'react'
import Input from '../ui/Input'
import { GlobalContext } from '../context/GlobalProvider'
import { SearchApi } from '../Function/ApiCall'
import List from '../ui/List'


function Landing() {
  const [city, setCity] = useState<null | any >(null)
  const { HandelWeather, Error,CityList,setCityList  } = useContext(GlobalContext)

  const handelClick = (arg:string) => {
    // CONDITION TO CHECK THE INPUT VALUE 
    if (city.trim().length == 0 || city.length == 0) return;

    // CALL FUNCTION TO GET API DATA 
    setCity(arg)
    HandelWeather(arg)

  }
  useEffect(() => {
    const handelOnChange = async () => {

      const lis = await SearchApi(city)
      console.log(lis);
      
      setCityList(lis)

    }
    handelOnChange()
  }, [city])

  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] h-screen xl:h-full flex  back flex-col items-center gap-5">
      <div className='w-full xl:w-1/3 px-10 h-10 flex gap-2'>
        <div>
          <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity} ></Input>
          <ul className='px-1'>
            {
              CityList && city && CityList.map((ele:any,idx:number) => <List key={idx} data={ele} func={handelClick}></List>)
            }
          </ul>
        </div>
      </div>
      {Error && <h1 className='text-red-800  text-3xl capitalize font-semibold'>{Error}</h1>}
    </div>
  )
}

export default Landing