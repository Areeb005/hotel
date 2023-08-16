import Breadcrumb from "../components/Breadcrumb"
import Button from "../components/Button"
import { HiOutlineUserCircle, HiOutlineArrowsExpand, HiCheck } from "react-icons/hi";
import { BiBed } from "react-icons/bi";
import RoomPageSlider from "../components/RoomPageSlider";
import { Link, useParams } from "react-router-dom";
import rooms from "../data/rooms";
import { useEffect, useState, useRef } from "react";




const Single = () => {
    const [Data, setData] = useState({})
    const { id } = useParams();
    const splitted = id.split(' ')


    const imgRef = useRef(null)
    function ActiveImg(e) {
        console.log(e.target.src);
        window.document.getElementById("img_modal").src = e.target.src;
    }


    useEffect(() => {
        const found = rooms.find((element) => element.name === id)
        setData(found)
    }, [])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {

    }, [imgRef]);




    return <>
        <div className='bg-[url("./assets/images/bg-room.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1={splitted[0]} text2={splitted[1]} />

        <div className='m-auto px-12 max-xl:px-4 flex justify-center items-center'>
            <div className='p-8 max-md:px-4 w-full bg-black/40'>

                <RoomPageSlider Images={Data?.img} imgRef={imgRef} ActiveImg={ActiveImg} data_modal_target="defaultModal" data_modal_toggle="defaultModal" />



                {/* -------------------------------------------------------- */}



                <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed flex-col bg-black/90 top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
                    <div className="w-full flex items-end justify-end p-4">
                        <button type="button" className="text-gray-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="relative w-[65%] h-full">
                            <div className="relative bg-transparent h-full w-full flex flex-col justify-center items-center">
                                <div className="flex items-center justify-center w-full">
                                    <img id="img_modal" src="" alt="img-modal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* -------------------------------------------------------- */}



                <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:gap-4 border border-white/30 px-4 py-6 my-4">
                    <div className="">
                        <p className='single-info-text'><HiOutlineUserCircle className='h-10 w-auto mr-3' />{Data.guests} Guests</p>
                    </div>
                    <div className="">
                        <p className='single-info-text'><HiOutlineArrowsExpand className='h-10 w-auto mr-3' />{Data.foot} ft</p>
                    </div>
                    <div className="">
                        <p className='single-info-text'><BiBed className='h-10 w-auto mr-3' />${Data.price}/ Night</p>
                    </div>
                    <div className="flex justify-center items-center max-md:block">
                        <Link to={'/booking'}><Button text={'Book Now'} /></Link>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                    <div className="col-span-2">
                        <h3 className="contact-heading">Room Overview</h3>
                        <p className="contact-text font-light">{Data.desc}</p>
                    </div>
                    <div className="">
                        <h3 className="contact-heading">Room Facilities</h3>
                        <ul className="contact-text font-light">
                            {
                                (Data?.features)?.map((element, index) => {
                                    return <li key={index} className="single-info-li"><HiCheck className="check-icon" />{element}</li>

                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Single
