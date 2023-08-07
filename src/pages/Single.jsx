import Breadcrumb from "../components/Breadcrumb"
import Button from "../components/Button"
import { HiOutlineUserCircle, HiOutlineArrowsExpand, HiCheck } from "react-icons/hi";
import { BiBed } from "react-icons/bi";
import RoomPageSlider from "../components/RoomPageSlider";



const Single = () => {
    return <>

        <div className='bg-[url("./assets/images/bg-room.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1={'Latest'} text2={'Suite'} />

        <div className='m-auto px-12 max-xl:px-4 flex justify-center items-center'>
            <div className='p-8 max-md:px-4 w-full bg-black/40'>

                <RoomPageSlider />


                <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:gap-4 border border-white/30 px-4 py-6 mb-4">
                    <div className="">
                        <p className='single-info-text'><HiOutlineUserCircle className='h-10 w-auto mr-3' />2 Guests</p>
                    </div>
                    <div className="">
                        <p className='single-info-text'><HiOutlineArrowsExpand className='h-10 w-auto mr-3' />90 ft</p>
                    </div>
                    <div className="">
                        <p className='single-info-text'><BiBed className='h-10 w-auto mr-3' />$99 / Night</p>
                    </div>
                    <div className="flex justify-center items-center max-md:block">
                        <Button text={'Book Now'} />
                    </div>
                </div>

                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                    <div className="col-span-2">
                        <h3 className="contact-heading">Room Overview</h3>
                        <p className="contact-text font-light">Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.</p>
                    </div>
                    <div className="">
                        <h3 className="contact-heading">Room Facilities</h3>
                        <ul className="contact-text font-light">
                            <li className="single-info-li"><HiCheck className="check-icon" /> 48" HD TV with more than 60 channels</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> Coffee and tea makers</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> Hot & cold bathing</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> High comfortable mattress bed</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> Hight quality bed sheets</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> Free WIFI internet connection</li>
                            <li className="single-info-li"><HiCheck className="check-icon" /> Connecting room by request</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Single
