import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import RoomsData from '../data/rooms.json'
import { FreeMode, Pagination } from 'swiper/modules';



import { HiOutlineClock, HiOutlineHome, HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import room6 from '../assets/images/room6.jpg'
import Button from "../components/Button";


// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const RoomPageSlider = () => {

    const Rooms = RoomsData.rooms;

    return <>
        <>
            <Swiper
                pagination={{
                    clickable: true
                }}
                freeMode = {true}
                slidesPerView={3}
                spaceBetween={20}
                modules={[FreeMode, Pagination]}
                className="mySwiper">


                {
                    Rooms.map((data) => {
                        return <SwiperSlide>

                            <div className="h-80">
                                <div className="cursor-pointer">
                                    <img className="" src={require('../assets/images/bed.jpg')} alt="" />
                                </div>
                                <div></div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    </>
}

export default RoomPageSlider