import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from './Button'


const Navbar = () => {
    const [scroll, setscroll] = useState('')
    const [showMenu, setShowMenu] = useState(false)
    const [showMenu2, setShowMenu2] = useState(false)
    const location = useLocation()
    const url = location.pathname


    window.onscroll = function () {
        if (window.scrollY > 50) {
            setscroll('down');
        } else if (window.scrollY < 50) {
            setscroll('top');
        }
    }


    return <>


        <header>
            {/* HEADER START  */}
            <nav className={`bg-black/70 fixed w-full z-50 ${scroll === 'down' ? 'header-scroll' : 'header'}`}>
                <div className="container m-auto">
                    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 max-md:p-2">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="h-14 mr-3 max-[425px]:h-12" alt="Andtour Logo" /></a>
                        <div className="flex md:order-2">
                            <Button text={'Booking'} className={"max-md:hidden"} />
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden" onClick={showMenu2 === false ? () => setShowMenu2(true) : () => setShowMenu2(false)} aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-12 h-8 max-md:text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:hidden md:w-auto md:order-1 ${showMenu2 === false ? 'not-show' : 'show'}`} id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={`/`} className={`nav-links ${url === '/' && 'text-[#CA8E46]'}`} aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/about'} className={`nav-links ${url === '/about' && 'text-[#CA8E46]'}`}  >About</Link>
                                </li>
                                <li>
                                    <Link to={'/room-page1'} className={`nav-links ${url === '/room-page1' && 'text-[#CA8E46]'}`}  >Rooms</Link>
                                </li>
                                <li>
                                    <Link to={'/booking'} className={`nav-links ${url === '/booking' && 'text-[#CA8E46]'}`}  >Booking</Link>
                                </li>
                                <li>
                                    <Link to={'/gallery'} className={`nav-links ${url === '/gallery' && 'text-[#CA8E46]'}`}  >Gallery</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`nav-links ${url === '/contact' && 'text-[#CA8E46]'}`}  >Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 max-md:hidden`} id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={`/`} className={`nav-links ${url === '/' && 'text-[#CA8E46]'}`} aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/about'} className={`nav-links ${url === '/about' && 'text-[#CA8E46]'}`}  >About</Link>
                                </li>
                                <li>
                                    <Link to={'/room-page1'} className={`nav-links ${url === '/room-page1' && 'text-[#CA8E46]'}`}  >Rooms</Link>
                                </li>
                                <li>
                                    <Link to={'/booking'} className={`nav-links ${url === '/booking' && 'text-[#CA8E46]'}`}  >Booking</Link>
                                </li>
                                <li>
                                    <Link to={'/gallery'} className={`nav-links ${url === '/gallery' && 'text-[#CA8E46]'}`}  >Gallery</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`nav-links ${url === '/contact' && 'text-[#CA8E46]'}`}  >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HEADER END */}
        </header>

        <header className=''>
            {/* HEADER START  */}
            <nav className={`absolute w-full z-50 max-md:bg-black/70 ${scroll === 'down' ? 'hidden' : 'block'}`}>
                <div className="container m-auto">
                    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 max-md:p-2">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="h-14 mr-3 max-[425px]:h-12" alt="Andtour Logo" /></a>
                        <div className="flex md:order-2">
                            <Button text={'Booking'} className={"max-md:hidden"} />
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden" onClick={showMenu2 === false ? () => setShowMenu2(true) : () => setShowMenu2(false)} aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-12 h-8 max-md:text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:hidden md:w-auto md:order-1 ${showMenu2 === false ? 'not-show' : 'show'}`} id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={`/`} className={`nav-links ${url === '/' && 'text-[#CA8E46]'}`} aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/about'} className={`nav-links ${url === '/about' && 'text-[#CA8E46]'}`}  >About</Link>
                                </li>
                                <li>
                                    <Link to={'/room-page1'} className={`nav-links ${url === '/room-page1' && 'text-[#CA8E46]'}`}  >Rooms</Link>
                                </li>
                                <li>
                                    <Link to={'/booking'} className={`nav-links ${url === '/booking' && 'text-[#CA8E46]'}`}  >Booking</Link>
                                </li>
                                <li>
                                    <Link to={'/gallery'} className={`nav-links ${url === '/gallery' && 'text-[#CA8E46]'}`}  >Gallery</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`nav-links ${url === '/contact' && 'text-[#CA8E46]'}`}  >Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 max-md:hidden`} id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={`/`} className={`nav-links ${url === '/' && 'text-[#CA8E46]'}`} aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/about'} className={`nav-links ${url === '/about' && 'text-[#CA8E46]'}`}>About</Link>
                                </li>
                                <li>
                                    <Link to={'/room-page1'} className={`nav-links ${url === '/room-page1' && 'text-[#CA8E46]'}`}>Rooms</Link>
                                </li>
                                <li>
                                    <Link to={'/booking'} className={`nav-links ${url === '/booking' && 'text-[#CA8E46]'}`}  >Booking</Link>
                                </li>
                                <li>
                                    <Link to={'/gallery'} className={`nav-links ${url === '/gallery' && 'text-[#CA8E46]'}`}  >Gallery</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`nav-links ${url === '/contact' && 'text-[#CA8E46]'}`}  >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HEADER END */}
        </header>

    </>
}

export default Navbar