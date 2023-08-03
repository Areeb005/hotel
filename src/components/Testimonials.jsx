import React from 'react'
import commas from '../assets/images/comas.png'

const Testimonials = () => {
    return <>
        <div className='section-5 py-20 bg-[url("./assets/images/home-last.jpg")] bg-cover bg-center'>
            <div className="container m-auto px-4">
                <div className='flex flex-col justify-center items-center mb-12'>
                    <h2 className='text-4xl text-white font-semibold mb-6'>Testimonials</h2>
                    <div className='h-0.5 w-12 bg-[#A27238]'></div>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={commas} alt="" className='mb-6' />
                    <p className='w-2/3 max-md:w-full text-white text-3xl max-sm:text-xl font-serif leading-10 mb-8'><i>The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown</i></p>
                    <p className='text-white text-sm font-serif'>Benedict Mervine, Customer</p>
                </div>
            </div>
        </div>

    </>
}

export default Testimonials