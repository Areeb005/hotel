import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { HiChevronRight } from "react-icons/hi";
import sectionImg1 from '../assets/images/section-img1.jpg'
import sectionImg2 from '../assets/images/section-img2.jpg'
import { motion, useInView, useScroll, useAnimation, useTransform, useMotionValueEvent, transform } from 'framer-motion';
import useElementVisibility from './useElementVisibility';



const TwoColumSection = () => {
    const [scroll, setscroll] = useState(0)
    const [transformPx, settransformPx] = useState(0)

    const targetRef = useRef(null);

    const { scrollY } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollY, [0.1, 0.25, 0.7, 1], ["0px", "55px", "60px", "70px"])

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })

    // const { targetRef, isVisible } = useElementVisibility();



    // window.onscroll = function () {
    //     setscroll(window.scrollY);
    // }

    // useEffect(() => {
    //     if (scroll === 1500) {
    //         settransformPx(transformPx)
    //     } else if (scroll < transformPx) {
    //         settransformPx(transformPx - 0.5)
    //     } else if (scroll >= 925 && scroll <= 1500) {
    //         settransformPx(transformPx + 0.5);
    //     }
    //     else if (scroll < 925) {
    //         settransformPx(0)
    //     }
    // }, [scroll])


    return <>
        <div className="m-auto px-12 py-12 max-lg:px-4">
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div ref={targetRef} className='grid grid-cols-2 gap-6'>
                    <motion.div
                        style={{ y }}
                    >
                        <div>
                            <img src={sectionImg1} alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        style={{  }}
                    >
                        <div>
                            <img src={sectionImg2} alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h2 className='text-4xl text-white font-semibold mb-6'>The Luxury Experience You’ll Remember</h2>
                        <div className='h-0.5 w-12 bg-[#A27913] mb-6'></div>
                        <p className='text-white tracking-wide font-light mb-6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <Button text="Book Now" iconAfter={<HiChevronRight className='h-5 w-auto' />} />
                    </div>
                </div>
            </div>
        </div >


    </>
}

export default TwoColumSection