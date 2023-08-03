import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaRss, FaSkype, FaDribbble } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation()
    const url = location.pathname

    return <>
        <div className={`bg-black/40 py-5 px-12 max-md:px-4 ${url === '/' ? 'mt-0' : 'mt-16'}`}>
            <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-6'>
                <div>
                    <p className='text-white'>Copy@ {new Date().getFullYear()} Seaside. All rights reserved by dTecherz</p>
                </div>
                <div className='flex justify-end max-md:justify-start'>
                    <FaFacebookF className='mr-4 text-white h-5 w-auto' />
                    <FaTwitter className='mr-4 text-white h-5 w-auto' />
                    <FaRss className='mr-4 text-white h-5 w-auto' />
                    <FaGooglePlusG className='mr-4 text-white h-5 w-auto' />
                    <FaSkype className='mr-4 text-white h-5 w-auto' />
                    <FaDribbble className='mr-4 text-white h-5 w-auto' />
                </div>
            </div>
        </div>
    </>
}

export default Footer