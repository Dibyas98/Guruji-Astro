import React from 'react'
import icon01d from '../assects/weather-icons/icon01d.png'
import Image from 'next/image'

function WeatherLogo() {
  return (
    <section className='w-full h-fit  flex justify-center items-center'>
        <Image src={icon01d} alt='' width='200' height='100'></Image>
    </section>
  )
}

export default React.memo(WeatherLogo)