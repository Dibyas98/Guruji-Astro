import React from 'react'

function List({data,func}:any) {
  return (
    <li className='bg-white border px-1 w-full' onClick={()=>func(data.name)}>{data.name}</li>
  )
}

export default List