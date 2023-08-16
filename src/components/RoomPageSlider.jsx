import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { ImageGroup, Image } from 'react-fullscreen-image'


// Import Swiper styles
import 'swiper/css/pagination';

const RoomPageSlider = ({ Images, ActiveImg, data_modal_target, data_modal_toggle }) => {

    return <>
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper room123123"
                breakpoints={{
                    "600": {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    "992": {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                }}
            >


                {
                    Images?.map((data, index) => {
                        return <SwiperSlide key={index}>
                            <div className="h-80 w-max mb-12 cursor-pointer">
                                <img src={data} alt="room-images" className='h-80' onClick={(e) => ActiveImg(e)} data-modal-target={data_modal_target} data-modal-toggle={data_modal_toggle} />
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    </>
}

export default RoomPageSlider