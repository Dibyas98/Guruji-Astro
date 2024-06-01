"use client";
import React, { useContext, useEffect, useState } from 'react'
import Input from '../ui/Input';
import { Search } from 'lucide-react';
import { GlobalContext } from '../context/GlobalProvider';
import WeatherLogo from '../ui/WeatherLogo';
import WeatherDetail from '../ui/WeatherDetail';
import SunTime from '../ui/SunTime';
import Humidity from '../ui/Humidity';
import MinMaxTemp from '../ui/MinMaxTemp';
import ForCastCard from '../ui/ForCastCard';
import List from '../ui/List';
import { SearchApi } from '../Function/ApiCall';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function Weather({place}:any): React.ReactNode {

    // TO GET DAY NAME IN FORCAST
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


    // INITIALIZE CONTEXTHOOK TO HANDEL CITY 
    const { HandelWeather, currentWeather, Forcast, handelOnChange,CityList,setCityList  } = useContext(GlobalContext)


    // INITILIZE CITY VARIABLE FOR INPUT FORM 
    const [city, setCity] = useState('')

    // FORM SUBMIT FUNCTION 
    const HandelFormSubmit = (event: any) => {
        // TO PREVENT DEFALUT PROPERTY 
        event.preventDefault();

        // CONDITION TO CHECK THE INPUT VALUE 
        if (city.trim().length == 0 || city.length == 0) return;

        // CALL FUNCTION TO GET API DATA 
        HandelWeather(city)

    }
    const handelClick = (arg:string) => {
        // CONDITION TO CHECK THE INPUT VALUE 
        if (city.trim().length == 0 || city.length == 0) return;
    
        // CALL FUNCTION TO GET API DATA 
        setCity(arg)
        HandelWeather(arg)
    
      }

    //   CALL FUNC WHEN CITY CHANGES 
      useEffect(() => {
        const handelOnChange = async () => {
    
          const lis = await SearchApi(city)
          
          setCityList(lis)
    
        }
        handelOnChange()
      }, [city])
      

    return (
        <section className='w-full h-full flex flex-col xl:flex-row xl:rounded-lg' >
            <div className='w-full xl:w-4/12 py-2 bg-white rounded-t-xl xl:rounded-r-none xl:rounded-l-xl'>
                <form action="" className='w-full px-5 md:px-28' onSubmit={HandelFormSubmit}>
                    <div className='w-full h-full relative '>
                        <div className='w-full'>
                            <Input type='text' style={'rounded-l pl-7'} placeholder='Search for places...' value={city} setCity={setCity} ></Input>
                            <div className='px-2'>
                            <ul className='px-1 fixed w-64 flex flex-col items-center pt-1 bg-white border-x-2 rounded-b-lg'>
                                {
                                    CityList && city && CityList.map((ele: any, idx: number) => <List key={idx} data={ele} func={handelClick}></List>)
                                }
                            </ul>
                                </div>
                                
                        </div>
                        <div className='absolute  top-0 py-1 h-full left-2 '>
                            <Search className='' style={{ width: '60%' }} />
                        </div>
                    </div>
                </form>

                {currentWeather && <main className='w-full py-4'>
                    <h1 className='font-2xl text-2xl px-5 capitalize'>{currentWeather.name}</h1>
                    <div className='w-full flex flex-col items-center font-bold'>
                        <WeatherLogo icon={currentWeather.weather[0].icon} wid='200' hig='200'></WeatherLogo>
                        <h1>{currentWeather.weather[0].main}</h1>

                    </div>
                    <div className='w-full '>
                        <WeatherDetail current={currentWeather}></WeatherDetail>
                    </div>
                </main>}
            </div>
            {
                currentWeather && <div className='bg-[#f6f5f5] w-full xl:w-8/12 xl:rounded-r-lg h-full p-5 flex gap-10 flex-col-reverse md:flex-col xl:flex-col'>
                    <div className='flex flex-col w-full  gap-5'>
                        <h1 className='font-bold text-xl'>Highlights</h1>
                        <div className='w-full h-42 xl:h-60 flex gap-5 md:gap-3 md:justify-center xl:justify-center p-2 overflow-scroll xl:overflow-hidden '>
                            {
                                Forcast && Forcast.map((ele: any, idx: number) => {
                                    return <ForCastCard key={idx} data={ele} day={forecastDays[idx]}></ForCastCard>
                                })
                            }


                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <h1 className='font-bold text-xl '>Today's Highlights</h1>
                        <div className='w-full bg-sault-400 flex xl:gap-10 md:flex-row xl:flex-row flex-wrap md:flex-nowrap xl:flex-nowrap gap-3 '>
                            <div className='bg-white w-full md:w-4/12 xl:w-4/12  rounded-lg'>
                                <SunTime time={currentWeather.sys}></SunTime>
                            </div>
                            <div className='bg-white w-1/2 md:w-4/12 xl:w-4/12 rounded-lg'>
                                <Humidity val={currentWeather.main.humidity}></Humidity>
                            </div>
                            <div className='bg-white md:w-4/12 xl:w-4/12 rounded-lg'>
                                <MinMaxTemp temp={currentWeather.main}></MinMaxTemp>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}
export default React.memo(Weather)
