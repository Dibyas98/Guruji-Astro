import React from 'react'
import icon01d from '../assects/weather-icons/icon01d.png'
import icon01n from '../assects/weather-icons/icon01n.png'
import icon02d from '../assects/weather-icons/icon02d.png'
import icon03d from '../assects/weather-icons/icon03d.png'
import icon03n from '../assects/weather-icons/icon03n.png'
import icon04d from '../assects/weather-icons/icon04d.png'
import icon04n from '../assects/weather-icons/icon04n.png'
import icon09d from '../assects/weather-icons/icon09d.png'
import icon09n from '../assects/weather-icons/icon09n.png'
import icon10d from '../assects/weather-icons/icon10d.png'
import icon10n from '../assects/weather-icons/icon10n.png'
import icon11d from '../assects/weather-icons/icon11d.png'
import icon11n from '../assects/weather-icons/icon11n.png'
import icon13d from '../assects/weather-icons/icon13d.png'
import icon13n from '../assects/weather-icons/icon13n.png'
import icon50d from '../assects/weather-icons/icon50d.png'
import icon50n from '../assects/weather-icons/icon50n.png'
import unknown from '../assects/weather-icons/unknown.png'
import Image from 'next/image'

function WeatherLogo({icon}:any):React.ReactNode {
  console.log(icon);
  
  return (
    <section className='w-full h-fit  flex justify-center items-center  p-5 '>
        <div className='bg-[#dcdcdca6] rounded-xl'>
        {icon == '01d' && <Image src={icon01d} alt='' width='200' height='100'></Image>}
        {icon == '01n' && <Image src={icon01n} alt='' width='200' height='100'></Image>}
        {icon == '02d' && <Image src={icon02d} alt='' width='200' height='100'></Image>}
        {icon == '03d' && <Image src={icon03d} alt='' width='200' height='100'></Image>}
        {icon == '03n' && <Image src={icon03n} alt='' width='200' height='100'></Image>}
        {icon == '04d' && <Image src={icon04d} alt='' width='200' height='100'></Image>}
        {icon == '04n' && <Image src={icon04n} alt='' width='200' height='100'></Image>}
        {icon == '09d' && <Image src={icon09d} alt='' width='200' height='100'></Image>}
        {icon == '09n' && <Image src={icon09n} alt='' width='200' height='100'></Image>}
        {icon == '10d' && <Image src={icon10d} alt='' width='200' height='100'></Image>}
        {icon == '10n' && <Image src={icon10n} alt='' width='200' height='100'></Image>}
        {icon == '11d' && <Image src={icon11d} alt='' width='200' height='100'></Image>}
        {icon == '11n' && <Image src={icon11n} alt='' width='200' height='100'></Image>}
        {icon == '13d' && <Image src={icon13d} alt='' width='200' height='100'></Image>}
        {icon == '13n' && <Image src={icon13n} alt='' width='200' height='100'></Image>}
        {icon == '50d' && <Image src={icon50d} alt='' width='200' height='100'></Image>}
        {icon == '50n' && <Image src={icon50n} alt='' width='200' height='100'></Image>}
        {icon == 'unknown' && <Image src={unknown} alt='' width='200' height='100'></Image>}

        </div>
    </section>
  )
}

export default React.memo(WeatherLogo)