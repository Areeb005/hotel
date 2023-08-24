import Breadcrumb from '../components/Breadcrumb'
import { useEffect, useMemo, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';


const Booking = () => {

    const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [MonthStartingDays, setMonthStartingDays] = useState([])
    const [localState, setlocalState] = useState([])
    const [loading, setLoading] = useState(true)
    const [Adults, setAdults] = useState(0)
    const [Children, setChildren] = useState(0)
    const [timeSlot, settimeSlot] = useState('9:00 AM  - 10:00 AM')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [Message, setMessage] = useState('')
    const [SelectedRoom, setSelectedRoom] = useState('standard_room')

    const btnRef = useRef()

    const [data, setData] = useState({
        dates: [],
        selectedDates: [],
        standard_room: [],
        deluxe_room: [],
        premier_room: [],
        family_suite: [],
        luxury_suite: [],
        president_suite: [],
    })

    // const [Dates, setDates] = useState([])
    // const [selectedDates, setselectedDates] = useState(['19', '20', '31']);


    const getDaysInMonth = () => {
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const date = new Date(year, month, 1);
        const days = data.dates;
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        setData({ ...data, dates: days })
        setLoading(false)

        for (let i = 0; i < 7; i++) {
            const index = data.dates[i].getDay();

            const Array = MonthStartingDays;
            Array.push(daysName[index])
            setMonthStartingDays(Array)
        }
    }

    const getBookedRoom = () => {
        return JSON.parse(localStorage.getItem(`${SelectedRoom}`));

    }

    const getCustomerData = () => {
        return JSON.parse(localStorage.getItem('CustomerData'));

    }

    const selectDates = (e) => {

        console.log(btnRef.current.innerText);
        console.log(e.target.value);

        const prevArray = data.selectedDates;
        if (prevArray.includes(e.target.value)) {
            const indexOfValue = parseInt(prevArray.indexOf(e.target.value))
            prevArray.splice(indexOfValue, 1)
            setData({ ...data, selectedDates: prevArray })
            // setselectedDates(prevArray)
        } else {
            prevArray.push(e.target.value);
            setData({ ...data, selectedDates: prevArray });
            // setselectedDates(prevArray);
        }
    }

    const formSubmit = () => {
        if ((data.selectedDates).length === 0) {
            alert('Please Select Date')
        } else {
            const updating = { ...data, [SelectedRoom]: [...data[SelectedRoom], ...data.selectedDates], selectedDates: [] }
            setData(updating)

            let booked = getBookedRoom()
            if (booked === null) booked = []
            booked.push(...data.selectedDates)
            localStorage.setItem(`${SelectedRoom}`, JSON.stringify(booked));




            const customerData = {
                [SelectedRoom]: [...data.selectedDates],
                Adults: Adults,
                Children: Children,
                TimeSlot: timeSlot,
                SelectedRoom: SelectedRoom,
                Name: Name,
                Email: Email,
                Number: Number,
                Message: Message
            }

            let FinalData = getCustomerData()
            if (FinalData === null) FinalData = []
            FinalData.push(customerData)
            localStorage.setItem('CustomerData', JSON.stringify(FinalData));

            console.log(FinalData);

        }


    }

    useEffect(() => {

            getDaysInMonth();


    }, [])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        let booked = getBookedRoom()
        if (booked === null) booked = []
        setlocalState(booked)
    }, [SelectedRoom])


    if (loading) {
        return <h1>Loading...</h1>
    }

    return <>
        <div className='bg-[url("./assets/images/about-bg1.jpg")] bg-cover bg-center fixed w-full h-[100vh] -z-50'>
            <div className='h-full bg-black/40'></div>
        </div>

        <Breadcrumb text2={'Booking'} />

        <div className='m-auto px-12 max-lg:px-4 flex justify-center items-center'>
            <div className='p-8 max-md:px-2 w-[600px] max-md:w-full bg-black/40'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='px-3 mb-5'>
                        <label htmlFor="" className='label'>Select Room:</label>
                        <select name="" className='select form-input' onChange={(e) => setSelectedRoom(e.target.value)}>
                            <option value="standard_room">Standard Room</option>
                            <option value="deluxe_room">Deluxe Room</option>
                            <option value="premier_room">Premier Room</option>
                            <option value="family_suite">Family Suite</option>
                            <option value="luxury_suite">Luxury Suite</option>
                            <option value="president_suite">President Suite</option>
                        </select>
                    </div>
                    <div className="calendar-container px-3 mb-5">
                        <label htmlFor="" className='label'>Choose Date*:</label>
                        <div className="grid grid-cols-7 text-white text-center">
                            <div className='col-span-7 border-gray-600 border font-semibold py-2'>{monthName[new Date().getMonth()]} {new Date().getFullYear()}</div>
                            {
                                MonthStartingDays.map((data, index) => {
                                    return <div key={index} className='calendaer-dates py-2'>{data}</div>
                                })
                            }
                            {
                                (data.dates).map((thisDate, index) => {
                                    return <div key={index} className={`calendaer-dates ${(data?.selectedDates)?.includes(thisDate.getDate().toString()) ? 'bg-white text-black' : ''} ${thisDate.getDate() <= (new Date().getDate()) || localState.includes(thisDate.getDate().toString()) || data[SelectedRoom]?.includes(thisDate.getDate().toString()) ? 'text-white/50 bg-gray-400/20' : ' hover:bg-white hover:text-black'}`}>
                                        <button type='button' ref={btnRef} onClick={(e) => selectDates(e)} disabled={thisDate.getDate() <= (new Date().getDate()) || localState.includes(thisDate.getDate().toString()) || data[SelectedRoom]?.includes(thisDate.getDate().toString())} className='w-full py-2 outline-none' value={thisDate.getDate()}> {thisDate.getDate()} </button>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                    <div className='flex max-md:block mb-5'>
                        <div className='px-3 max-md:mb-5'>
                            <label htmlFor="" className='label'>Adults:</label>
                            <div className='flex items-center'>
                                <button type='button' className='form-count-btn bg-color-1' onClick={() => setAdults(Adults - 1)}>-</button>
                                <input type="number" name="" className='form-input-count' defaultValue={Adults} />
                                <button type='button' className='form-count-btn bg-color-1' onClick={() => setAdults(Adults + 1)}>+</button>
                            </div>
                        </div>
                        <div className='px-3'>
                            <label htmlFor="" className='label'>Children:</label>
                            <div className='flex items-center'>
                                <button type='button' className='form-count-btn bg-color-1' onClick={() => setChildren(Children - 1)}>-</button>
                                <input type="number" name="" className='form-input-count' defaultValue={Children} />
                                <button type='button' className='form-count-btn bg-color-1' onClick={() => setChildren(Children + 1)}>+</button>
                            </div>
                        </div>

                    </div>
                    <div className='px-3 mb-5'>
                        <label htmlFor="" className='label'>Time Slots*:</label>
                        <div className='mb-2'>
                            <button type='button' className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '9:00 AM  - 10:00 AM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('9:00 AM  - 10:00 AM')}>9:00 AM  - 10:00 AM</button>
                            <button type='button' className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '10:00 AM - 11:00 AM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('10:00 AM - 11:00 AM')}>10:00 AM - 11:00 AM</button>
                        </div>
                        <div>
                            <button type='button' className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '11:00 AM - 12:00 PM (Noon)' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('11:00 AM - 12:00 PM (Noon)')}>11:00 AM - 12:00 PM (Noon)</button>
                            <button type='button' className={`form-time-btn mr-4 max-md:mb-3 ${timeSlot == '12:00 PM (Noon) - 1:00 PM' && 'bg-color1 font-semibold'}`} onClick={() => settimeSlot('12:00 PM (Noon) - 1:00 PM')}>12:00 PM (Noon) - 1:00 PM</button>
                        </div>
                    </div>
                    <div className='px-3 mb-5 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-8'>
                        <div>
                            <label htmlFor="" className='label'>Your Name*:</label>
                            <input type="text" className='form-input' value={Name} onChange={(e) => setName(e.target.value)} required />
                            <label htmlFor="" className='label'>Your Email*:</label>
                            <input type="email" className='form-input' value={Email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="" className='label'>Your Phone:</label>
                            <input type="tel" className='form-input' value={Number} onChange={(e) => setNumber(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Your Message:</label>
                            <textarea name="" id="" cols="30" rows="10" className='form-input h-[232px]' value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <Button text={'Submit Form'} onClick={() => formSubmit()} className={'mx-4 bg-transparent'} />
                </form>
            </div>
        </div>

    </>
}

export default Booking