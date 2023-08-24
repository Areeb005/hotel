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
                    <FaFacebookF className='mr-4 text-white h-5 w-auto cursor-pointer' />
                    <FaTwitter className='mr-4 text-white h-5 w-auto cursor-pointer' />
                    <FaRss className='mr-4 text-white h-5 w-auto cursor-pointer' />
                    <FaGooglePlusG className='mr-4 text-white h-5 w-auto cursor-pointer' />
                    <FaSkype className='mr-4 text-white h-5 w-auto cursor-pointer' />
                    <FaDribbble className='mr-4 text-white h-5 w-auto cursor-pointer' />
                </div>
            </div>
        </div>
    </>
}

export default Footer