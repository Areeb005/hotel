import React from 'react'

const Breadcrumb = ({text1, text2}) => {
  return <>
    <div className='flex flex-col text-white justify-center items-center text-center pt-32 pb-16'>
            <div>
                <span className='text-7xl font-light color-1 new-font-1'>{text1}</span>
                <h1 className='text-5xl tracking-widest font-semibold uppercase'>{text2}</h1>
            </div>
    </div>
  </>
}

export default Breadcrumb