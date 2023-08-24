// import logo from './logo.svg';
import './App.css';
import Banner from './componenets/Banner';
import NavBar from './componenets/NavBar';
import Progress from './componenets/Progress';
import What from './componenets/What';
import Bonus from './componenets/Bonus';
import Feature from './componenets/Feature';
import Partner from './componenets/Partner';
import Team from './componenets/Team';
import Footer from './componenets/Footer';
import Roadmap from './componenets/Roadmap';
import MobNav from './componenets/MobNav';
import scroll from './img/chevron-upwards-arrow.png'
// import AOS from 'aos';
import React,{useEffect} from 'react';
function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    // or simply just AOS.init();
    // AOS.init()
  return (
    <>
     <button id='fixed'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '-160px',
          backgroundColor: 'none',
          color: 'none' ,
          filter: 'brightness(0) invert(1)',
          textAlign: 'center',
        }}
      >
        <img src={scroll} alt="" />
      </button>
    <NavBar  />
    <MobNav/>
    <Banner data-aos={"fade-up"} />
    <Progress/>
    <What/>
    <Bonus/>
    <Feature/>
    <Partner/>
    <Team/>
    <Footer/>

    
    </>
  )
}

export default App;
