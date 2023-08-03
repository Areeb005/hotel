import React from 'react'
import TwoColumSection from '../components/TwoColumSection';
import { HiOutlineClock, HiOutlineHome, HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import { PiForkKnifeDuotone, PiSwimmingPoolDuotone } from "react-icons/pi";
import { TbTreadmill } from "react-icons/tb";
import Breadcrumb from '../components/Breadcrumb';



const About = () => {
    return <>
        <div className='bg-[url("./assets/images/about-bg1.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1="We Are" text2="Seaside" />

        <div className='section-4'>
            <TwoColumSection />
        </div>


        <div className='section-3 py-20'>
            <div className='m-auto px-12 max-lg:px-4'>
                <div className='flex flex-col justify-center items-center mb-12'>
                    <h2 className='text-4xl text-white font-semibold mb-6'>Hotel Facilites</h2>
                    <div className='h-0.5 w-12 bg-color-1'></div>
                </div>

                <div className='grid grid-cols-3 max-lg:grid-cols-1 max-lg:w-2/3 max-md:w-full gap-x-4 gap-y-8'>
                    <div className='card2 1'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <PiForkKnifeDuotone className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Restaurant</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                    <div className='card2 2'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <PiSwimmingPoolDuotone className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Swimming Pool</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                    <div className='card2 3'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <TbTreadmill className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Fitness Area</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                    <div className='card2 4'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <TbTreadmill className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Mini Bar</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                    <div className='card2 5'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <TbTreadmill className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Meeting Room</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                    <div className='card2 6'>
                        <div className='mr-4 p-2 bg-color-1'>
                            <TbTreadmill className='h-12 w-auto' />
                        </div>
                        <div>
                            <h3 className='uppercase font-bold mb-2'>Laundry Service</h3>
                            <p className='text-base font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
}

export default About