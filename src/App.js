import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import RoomPage1 from './pages/RoomPage1';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Single from './pages/Single';
import { useEffect } from 'react';
import Test from './pages/Test';








function App() {

useEffect(() =>{
  
}, [])

  return <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/room-page1' element={<RoomPage1 />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/single' element={<Single />} />
      <Route path='/test' element={<Test />} />
    </Routes>

    <Footer />

  </>
}

export default App;
