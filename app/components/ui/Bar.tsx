import React from 'react'

function Bar({style}:{[x:string]:string}) {
  return (
    <div className={`w-full h-3 bg-slate-400 ${style}`}>

    </div>
  )
}

export default Bar