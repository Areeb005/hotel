import React, { useLayoutEffect, useRef } from 'react'
import Button from '../components/Button'
import { HiChevronRight } from "react-icons/hi";
import sectionImg1 from '../assets/images/section-img1.jpg'
import sectionImg2 from '../assets/images/section-img2.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);


const TwoColumSection = () => {
    const main = useRef();



    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const image1 = self.selector('.image1');

            gsap.to(image1, {
                y: 70,
                scrollTrigger: {
                    trigger: image1,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    scrub: true,
                },
            });

            const image2 = self.selector('.image2');

            gsap.to(image2, {
                y: -70,
                scrollTrigger: {
                    trigger: image2,
                    start: 'bottom bottom',
                    // end: 'top 20%',
                    scrub: true,
                },
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, [])




    return <>
        <div ref={main} className="m-auto px-12 py-12 max-lg:px-4">
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div className='grid grid-cols-2 gap-6'>

                    <div className=''>
                        <img src={sectionImg1} className={`image1 -translate-y-10`} alt="" />
                    </div>

                    <div>
                        <img src={sectionImg2} className={`image2 translate-y-10`} alt="" />
                    </div>

                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h2 className='text-4xl text-white font-semibold mb-6'>The Luxury Experience You’ll Remember</h2>
                        <div className='h-0.5 w-12 bg-[#A27913] mb-6'></div>
                        <p className='text-white tracking-wide font-light mb-6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <Link to={'/booking'}>
                            <Button text="Book Now" iconAfter={<HiChevronRight className='h-5 w-auto' />} />
                        </Link>
                    </div>
                </div>
            </div>
        </div >


    </>
}

export default TwoColumSection