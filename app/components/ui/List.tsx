import React from 'react'

function List({data,func}:any) {
  return (
    <li className='bg-white border-b-2  border-x-0 px-1 w-full py-2 cursor-pointer hover:text-sky-600' onClick={()=>func(data.name)}>{data.name}</li>
  )
}

export default List