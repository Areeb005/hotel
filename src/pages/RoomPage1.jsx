import React from 'react'
import TwoColumSection from '../components/TwoColumSection';
import { HiOutlineClock, HiOutlineHome, HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import { PiForkKnifeDuotone, PiSwimmingPoolDuotone } from "react-icons/pi";
import { TbTreadmill } from "react-icons/tb";
import Breadcrumb from '../components/Breadcrumb';
import RoomsCompenent from '../components/RoomsCompenent';

const RoomPage1 = () => {
    return <>
        <div className='bg-[url("./assets/images/room-bg1.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1={'Select'} text2={'Rooms'} />

        <div className='m-auto px-12 max-lg:px-4'>
            <RoomsCompenent gridCols={'grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1'} />
        </div>

    </>
}

export default RoomPage1