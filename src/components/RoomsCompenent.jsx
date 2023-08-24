import { HiChevronRight, HiOutlineUserCircle, HiOutlineArrowsExpand } from "react-icons/hi";
import Button from "./Button";
import rooms from "../data/rooms";
import { Link } from "react-router-dom";




const RoomsCompenent = ({ gridCols }) => {
    return <>
        <div className={`grid ${gridCols} gap-8`}>
            {rooms.map((data, index) => {
                return <div key={index}>
                    <div className="bg-black/40 shadow h-full">
                        <div className="relative overflow-hidden" >
                            <div className="image-hover-div">
                                <Link to={`/single/${data.name}`}>
                                    <img src={data.img[1]} alt="" className="absolute duration-300 image-hover opacity-1 -z-10" />
                                    <img className="w-full duration-300 hover:opacity-0 image-hover" src={data.img[0]} alt="" />
                                </Link>
                            </div>
                            <div className='absolute w-full bottom-0 px-12 py-2 text-white font-light tracking-wider flex bg-black/40'>
                                <span className='mr-2 flex'><HiOutlineUserCircle className='h-6 w-auto mr-1' />{data.guests} Guests</span> <span className='flex'><HiOutlineArrowsExpand className='h-6 w-auto mr-1' />{data.foot} ft</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <Link to={`/single/${data.name}`}>
                                <h5 className="mb-2 text-white text-xl font-semibold tracking-widest">{data.name}</h5>
                            </Link>
                            <p className="text-white text-base font-light mb-10">Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility…</p>
                            <Link to={`/single/${data.name}`}>
                                <Button text={`Book Now For $${data.price}`} className={'w-full hover:pl-12'} iconAfter={<HiChevronRight className='h-5 w-auto' />} />
                            </Link>
                        </div>
                    </div>
                </div>


            })}

        </div >
    </>
}

export default RoomsCompenent