import Link from 'next/link'
import React from 'react'

function Notfound() {

    // ERROR PAGE 
  return (
    <div className='back w-full h-screen  flex flex-col items-center gap-5 justify-center'>
        <h1 className='text-6xl text-center'>404 Page Not Found</h1>
        <Link href={'/'}>
            <button className='button-5'>Return to Home Page</button>
        </Link>
    </div>
  )
}

export default Notfound