import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function LoaderRing() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default LoaderRing