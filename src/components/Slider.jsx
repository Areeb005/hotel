import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import rooms from '../data/rooms'

import { HiOutlineClock, HiOutlineHome, HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import room6 from '../assets/images/room6.jpg'
import Button from "../components/Button";


// Import Swiper styles
import "swiper/css";

const Slider = () => {

    console.log(rooms);

    return <>
        <>
            <Swiper slidesPerView={3}
                spaceBetween={30}
                className="mySwiper">


                {
                    rooms.map((data, index) => {

                        return <SwiperSlide key={index}>
                            <div>
                                <div className="bg-black/40 shadow h-full">
                                    <div className="relative">
                                        <a href="#">
                                            <img className="w-full" src={data.img[0]} alt="" />
                                        </a>
                                        <div className='absolute w-full bottom-0 px-12 py-2 text-white font-light tracking-wider flex bg-black/40'>
                                            <span className='mr-2 flex'><HiOutlineUserCircle className='h-6 w-auto mr-1' />{data.guests} Guests</span> <span className='flex'><HiOutlineArrowsExpand className='h-6 w-auto mr-1' />{data.foot} ft</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <a href="#">
                                            <h5 className="mb-2 text-white text-xl font-semibold tracking-widest">{data.name}</h5>
                                        </a>
                                        <p className="text-white text-base font-light mb-10">Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility…</p>
                                        <Button text={`Book Now For $${data.price}`} className={'w-full hover:pl-12'} iconAfter={<HiChevronRight className='h-5 w-auto' />} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    </>
}

export default Slider