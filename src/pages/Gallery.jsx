import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import beach from '../assets/images/beach.jpg'
import roomView from '../assets/images/room-view.jpg'
import bed from '../assets/images/bed.jpg'
import therapy from '../assets/images/therapy.jpg'
import resort from '../assets/images/resort.jpg'
import pool from '../assets/images/pool.jpg'
import bathroom from '../assets/images/bathroom.jpg'

const Gallery = () => {
    return <>
        <div className='bg-[url("./assets/images/room-bg1.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1={'Latest'} text2={'Gallery'} />

        <div className='m-auto px-20 max-lg:px-4'>

            <div className="container mx-auto py-2">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-8/12 flex-wrap">
                        <div className="w-[48%] max-xl:w-[45%] max-[503px]:w-[41%] m-2 img-div">
                            <img
                                alt="gallery"
                                className="h-full w-full"
                                src={pool} />
                            <div className='img-overlay'>
                                <p>Swimming Pool</p>
                            </div>
                        </div>
                        <div className="w-[48%] max-xl:w-[45%] max-[503px]:w-[41%] m-2 img-div">
                            <img
                                alt="gallery"
                                className=""
                                src={bathroom} />
                            <div className='img-overlay'>
                                <p>Bathrooms</p>
                            </div>
                        </div>
                        <div className="w-[48%] max-xl:w-[45%] max-[503px]:w-[41%] m-2 img-div">
                            <img
                                alt="gallery"
                                className=""
                                src={bed} />
                            <div className='img-overlay'>
                                <p>Soft & Clean Bed</p>
                            </div>
                        </div>
                        <div className="w-[48%] max-xl:w-[45%] max-[503px]:w-[41%] m-2 img-div">
                            <img
                                alt="gallery"
                                className=""
                                src={therapy} />
                            <div className='img-overlay'>
                                <p>Spa Therapy</p>
                            </div>
                        </div>
                        <div className="w-full max-xl:w-[92.5%] m-2 img-div">
                            <img
                                alt="gallery"
                                className=""
                                src={beach} />
                            <div className='img-big-overlay'>
                                <p>Beach</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-4/12 flex-wrap">
                        <div className="w-full m-2 img-div">
                            <img
                                alt="gallery"
                                className=""
                                src={resort} />
                            <div className='img-overlay'>
                                <p>Beach</p>
                            </div>
                        </div>
                        <div className="w-full m-2 img-div">
                            <img
                                alt="gallery"
                                className="h-full"
                                src={roomView} />
                            <div className='img-overlay'>
                                <p>Room View</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Gallery