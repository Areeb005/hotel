import React from 'react'
import logo from '../img/logo.png'
import facebook from '../img/facebook.png'
import i1 from '../img/i1.png'
import i2 from '../img/i2.png'
import i3 from '../img/i3.png'
import i4 from '../img/i4.png'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-logo">

                    <img src={logo} alt="" />
                </div>
                <div className="footer-para">
                    <p>
                        Subscribe to be informed about token
                        sale in advance</p>
                </div>
                <div className="main-mail">
                    <div className="input">
                        <input type="email" placeholder='Email' name="" id="" />
                    </div>
                    <div className="footer-btn">
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="icons">
                    <div className="foot-i">
                        <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={i1} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={i2} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={i3} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={i4} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-last">
                    <p> <a href="/">CrytoNexa</a> © 2022 All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}
