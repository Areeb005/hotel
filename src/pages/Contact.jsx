import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'



const Contact = () => {
    return <>
        <div className='bg-[url("./assets/images/bg-contact.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text1={'Make a'} text2={'Contact'} />


        <div className='m-auto px-12 max-xl:px-1 flex justify-center items-center'>
            <div className='p-8 max-md:px-2 max-sm:px-4 w-full bg-black/40'>
                <div className='grid grid-cols-3 max-md:grid-cols-1'>
                    <div className="col-span-2">
                        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8'>
                            <div>
                                <h3 className='contact-heading'>Seaside Miami</h3>
                                <p className='contact-text'><span className='contact-label'>Address:</span> 100 S Main St, Los Angeles, CA</p>
                                <p className='contact-text'><span className='contact-label'>Phone:</span> (208) 333 9296</p>
                                <p className='contact-text'><span className='contact-label'>Fax:</span> (208) 333 9296</p>
                                <p className='contact-text'><span className='contact-label'>Email:</span> contact@example.com</p>
                            </div>
                            <div>
                                <h3 className='contact-heading'>Seaside Maldives</h3>
                                <p className='contact-text'><span className='contact-label'>Address:</span> 100 S Main St, Los Angeles, CA</p>
                                <p className='contact-text'><span className='contact-label'>Phone:</span> (208) 333 9296</p>
                                <p className='contact-text'><span className='contact-label'>Fax:</span> (208) 333 9296</p>
                                <p className='contact-text'><span className='contact-label'>Email:</span> contact@example.com</p>
                            </div>
                        </div>
                        <h3 className='contact-heading max-lg:mt-5'>Send Us a Message</h3>
                        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 max-lg:gap-0'>
                            <div>
                                <input type="text" name="" id="" className='form-input font-bold' placeholder='Your Name' />
                                <input type="text" name="" id="" className='form-input font-bold' placeholder='Your Address' />
                                <input type="text" name="" id="" className='form-input font-bold' placeholder='Your Phone' />
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="5" className='form-input font-bold h-max py-5' placeholder='Your Message'></textarea>
                            </div>
                        </div>
                        <Button text={'Submit Form'} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Contact