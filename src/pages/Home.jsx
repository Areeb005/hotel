import React, { useEffect } from 'react'
import Button from '../components/Button'
import TwoColumSection from '../components/TwoColumSection';
import Testimonials from '../components/Testimonials';
import RoomsCompenent from '../components/RoomsCompenent';

import { HiOutlineClock, HiOutlineHome, HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import { BsHeadphones } from "react-icons/bs";
import video1 from '../assets/videos/local-video-1.mp4'
import room6 from '../assets/images/room6.jpg'
import sectionImg1 from '../assets/images/section-img1.jpg'
import sectionImg2 from '../assets/images/section-img2.jpg'
import sectionLast from '../assets/images/home-last.jpg'
import ReactPlayer from 'react-player';
import Slider from '../components/Slider';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';


const Home = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return <>
        <div className='bg-[url("./assets/images/bg-home.jpg")] bg-cover bg-top fixed w-full h-full -z-10'>
            <div className='h-full bg-black/70'></div>
        </div>

        <div className='section-1 relative'>
            <div className='overflow-hidden'>
                {/* <ReactPlayer autoPlay loop height={"2000px"} url={video1} /> */}
                <video autoPlay muted loop className='video'>
                    <source src={video1} type="video/mp4" />
                </video>
            </div>
            <div className='container m-auto px-12 max-lg:px-4 py-52 absolute top-0'>
                <div className=''>

                    <TypeAnimation className='text-6xl max-sm:text-5xl max-[420px]:text-3xl font-semibold text-white mb-4'

                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Enjoy Your Dream Vacation.',
                            2000,
                            'Enjoy Your Dream Honeymoon.',
                            2000,
                            'Enjoy Your Dream Trip.',
                            2000,
                            'Enjoy Your Dream Hotel.',
                            2000,
                        ]}
                        wrapper='h1'
                        speed={50}
                        repeat={Infinity}
                    />
                    {/* <h1 className='text-6xl max-sm:text-5xl max-[420px]:text-3xl font-semibold text-white mb-4'>Enjoy Your Dream <br /> Vacation</h1> */}
                    <p className='text-white font-semibold max-sm:text-sm mb-6 w-2/3 max-sm:w-full'>The Seaside Hotel is the right choice for visitors who are searching for a combination of charm, peace and, comfort.</p>
                    <Link to={'/rooms'}>
                        <Button text={'Choose Room'} />
                    </Link>
                </div>

            </div>
        </div>

        <div className='section-2 grid grid-cols-3 max-md:grid-cols-1'>
            <div className='card bg-[#A27238]'>
                <div className='pr-5'>
                    <HiOutlineClock className='h-12 w-auto' />
                </div>
                <div>
                    <h3 className='uppercase font-bold'>Opening Times</h3>
                    <p className='text-sm'>Monday - Friday: 09:00 - 18:00</p>
                </div>
            </div>

            <div className='card bg-[#79552A]'>
                <div className='pr-5'>
                    <HiOutlineHome className='h-12 w-auto' />
                </div>
                <div>
                    <h3 className='uppercase font-bold'>Our Location</h3>
                    <p className='text-sm'>100 S Main St, Los Angeles, CA</p>
                </div>
            </div>

            <div className='card bg-[#51391C]'>
                <div className='pr-5'>
                    <BsHeadphones className='h-12 w-auto' />
                </div>
                <div>
                    <h3 className='uppercase font-bold'>Customer Support</h3>
                    <p className='text-sm'>+208 333 9296</p>
                </div>
            </div>
        </div>

        <div className='section-3 relative py-0 bg-[url("./assets/images/bg-home.jpg")] bg-cover bg-center'>
            <div className='absolute z-0 w-full h-full bg-black/60'></div>
            <div className='m-auto px-12 py-20 max-lg:px-4'>
                <div className='flex flex-col justify-center items-center mb-12'>
                    <h2 className='text-4xl text-white font-semibold z-10 mb-6'>Our Rooms</h2>
                    <div className='h-0.5 w-12 z-10 bg-[#A27238]'></div>
                </div>
                <Slider />
            </div>
        </div>

        <div className='section-4 bg-[#79552A] py-12'>
            <TwoColumSection />
        </div>

        <div className='section-5 bg-[url("./assets/images/home-last.jpg")] relative bg-cover bg-center'>
            <div className='absolute w-full h-full bg-black/80'></div>
            <div className="container m-auto px-4 py-20">
                <div className='flex flex-col justify-center items-center mb-12'>
                    <h2 className='text-4xl text-white z-10 font-semibold mb-6'>Testimonials</h2>
                    <div className='h-0.5 w-12 bg-[#A27238] z-10'></div>
                </div>
                <Testimonials />
            </div>
        </div>
    </>
}

export default Home