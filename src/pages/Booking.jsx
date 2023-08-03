import Breadcrumb from '../components/Breadcrumb'
import { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';


const Booking = () => {

    const [timeSlot, settimeSlot] = useState('9:00 AM  - 10:00 AM')
    const [date, setDate] = useState(new Date())
    const [selectedDate, setselectedDate] = useState([]);

    useMemo(() => {
        let prevArr = selectedDate;
        prevArr.push(date);
        setselectedDate(prevArr);
        // console.log(selectedDate);
    }, [date])


    return <>
        <div className='bg-[url("./assets/images/about-bg1.jpg")] bg-cover bg-top fixed w-full h-full -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text2={'Booking'} />

        <div className='m-auto px-12 max-lg:px-4 flex justify-center items-center'>
            <div className='p-8 max-md:px-2 w-[600px] max-md:w-full bg-black/40'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="calendar-container">
                        <label htmlFor="" className='label'>Choose Date*:</label>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    <div className="text-center">
                        Selected date: {date.toDateString()}
                    </div>
                    <div className='flex max-md:block mb-5'>
                        <div className='px-3 max-md:mb-5'>
                            <label htmlFor="" className='label'>Adults:</label>
                            <div className='flex items-center'>
                                <button type='button' className='form-count-btn bg-color-1'>-</button>
                                <input type="number" name="" className='form-input-count' />
                                <button className='form-count-btn bg-color-1'>+</button>
                            </div>
                        </div>
                        <div className='px-3'>
                            <label htmlFor="" className='label'>Children:</label>
                            <div className='flex items-center'>
                                <button className='form-count-btn bg-color-1'>-</button>
                                <input type="number" name="" className='form-input-count' />
                                <button className='form-count-btn bg-color-1'>+</button>
                            </div>
                        </div>

                    </div>
                    <div className='px-3 mb-5'>
                        <label htmlFor="" className='label'>Time Slots*:</label>
                        <div className='mb-2'>
                            <button className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '9:00 AM  - 10:00 AM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('9:00 AM  - 10:00 AM')}>9:00 AM  - 10:00 AM</button>
                            <button className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '10:00 AM - 11:00 AM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('10:00 AM - 11:00 AM')}>10:00 AM - 11:00 AM</button>
                        </div>
                        <div>
                            <button className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '11:00 AM - 12:00 PM (Noon)' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('11:00 AM - 12:00 PM (Noon)')}>11:00 AM - 12:00 PM (Noon)</button>
                            <button className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '12:00 PM (Noon) - 1:00 PM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('12:00 PM (Noon) - 1:00 PM')}>12:00 PM (Noon) - 1:00 PM</button>
                        </div>
                    </div>
                    <div className='px-3 mb-5'>
                        <label htmlFor="" className='label'>Select Room:</label>
                        <select name="" className='select form-input'>
                            <option value="standart room">Standard Room</option>
                            <option value="standart room">Deluxe Room</option>
                            <option value="standart room">Premier Room</option>
                            <option value="standart room">Family Suite</option>
                            <option value="standart room">Luxury Suite</option>
                            <option value="standart room">President Suite</option>
                        </select>
                    </div>
                    <div className='px-3 mb-5 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-8'>
                        <div>
                            <label htmlFor="" className='label'>Your Name*:</label>
                            <input type="text" className='form-input' />
                            <label htmlFor="" className='label'>Your Email*:</label>
                            <input type="email" className='form-input' />
                            <label htmlFor="" className='label'>Your Phone:</label>
                            <input type="tel" className='form-input' />
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Your Message:</label>
                            <textarea name="" id="" cols="30" rows="10" className='form-input h-[232px]'></textarea>
                        </div>
                    </div>
                    <Button text={'Submit Form'} className={'mx-4 bg-transparent'} />
                </form>
            </div>
        </div>

    </>
}

export default Booking