import React from 'react'
import icon1 from '../img/icon1.png'

export default function Feature() {
    return (
        <>
            <div className="feature-heading">
                <h1>Features of CryptoNexa</h1>
            </div>
            <div className="faeture-para">
                <p>Empowering your crypto journey with real-time insights and intuitive tools, all on CryptoNexa.</p>
            </div>
            <div className="main-feature" data-aos="fade-up">
                <div className="submain-feature">
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/"> Lower Transaction Costs</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>Experience reduced transaction costs and efficient financial transactions through CryptoNexa's cutting-edge platform.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>
                    </div>
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/"> Seamless Cost Efficiency</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>Seamless cost efficiency redefined on CryptoNexa, where smart financial choices meet minimized expenses.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>
                    </div>
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/">Economical Crypto Transactions</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>Navigate the realm of economical crypto transactions with CryptoNexa, where affordability meets digital finance.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>

                    </div>
                </div>
                
            </div>
        </>
    )
}
