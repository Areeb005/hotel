import { useState } from 'react'
import logo from '../img/logo.png'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faBars } from '@fortawesome/fontawesome-free-solid'
import icon from '../img/down-chevron.png'
import close from '../img/close (1).png'
import English from '../img/united-kingdom.png'
import Spain from '../img/spain.png'


export default function MobNav() {
    const [showMobNavLinks, setShowMobNavLinks] = useState("none")
    const MyStyle = {
        color: '#1aafe9'
    }
    const My2 = {
        color : 'white'
    }
    const Open = () =>{
        document.getElementById("drop").style.top  = "0"
        document.getElementById("drop").style.height  = "100%"
    }
    const Close = () =>{
        document.getElementById("drop").style.top  = "-1340px"
        document.getElementById("drop").style.height  = "0"

    }
    const OpenSub = () => {
        document.getElementById("a").style.top  = "35px"
        document.getElementById("a").style.zIndex  = "1px"
        document.getElementById("a").style.zIndex  = "1" 
        document.getElementById("a").style.opacity  = "1"
        document.getElementById("none").style.display  = "none"
        document.getElementById("rotate").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub = () => {
        document.getElementById("a").style.top  = "0px"
        document.getElementById("a").style.zIndex  = "-1"

        document.getElementById("none").style.display  = "block"
        document.getElementById("rotate").style.display  = "none"
        document.getElementById("a").style.opacity  = "0"
   
        

    }
    const OpenSub2 = () => {
        document.getElementById("a1").style.top  = "30px"
        document.getElementById("a1").style.opacity  = "1"
        document.getElementById("a1").style.zIndex  = "1"
        document.getElementById("none2").style.display  = "none"
        document.getElementById("rotate2").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub2 = () => {
        document.getElementById("a1").style.top  = "0px"
        document.getElementById("a1").style.zIndex  = "-1"
        document.getElementById("none2").style.display  = "block"
        document.getElementById("rotate2").style.display  = "none"
        document.getElementById("a").style.opacity  = "0"
   
        

    }
   
    const OpenSub3 = () => {
        document.getElementById("a2").style.top  = "30px"
        document.getElementById("a2").style.opacity  = "1"
        document.getElementById("a2").style.zIndex  = "1"
        document.getElementById("none3").style.display  = "none"
        document.getElementById("rotate3").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub3 = () => {
        document.getElementById("a2").style.top  = "0px"
        document.getElementById("a2").style.zIndex  = "-1"
        document.getElementById("none3").style.display  = "block"
        document.getElementById("rotate3").style.display  = "none"
        document.getElementById("a2").style.opacity  = "0"
   
        

    }

    const OpenSub4 = () => {
        document.getElementById("a3").style.top  = "30px"
        document.getElementById("a3").style.opacity  = "1"
        document.getElementById("a3").style.zIndex  = "1"
        document.getElementById("none4").style.display  = "none"
        document.getElementById("rotate4").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub4 = () => {
        document.getElementById("a3").style.top  = "0px"
        document.getElementById("a3").style.zIndex  = "-1"
        document.getElementById("none4").style.display  = "block"
        document.getElementById("rotate4").style.display  = "none"
        document.getElementById("a3").style.opacity  = "0"
   
        

    }

    const [lang, setLang] = useState({
        language : 'English',
        Flag1: English
      });
    
      // const English = () => {
      //   // setLang({
      //   //   language : 'English',
      //   //   Flag1: English
      //   // })
      //   console.log("ok");
      // }
      const Eng = () => {
        setLang({
          language : 'English',
          Flag1: English
        })
    
      }
      const Spanish = () => {
        setLang({
          language : 'Spanish',
          Flag1: Spain
        })
    
      }
   
    return (
        <>
            <nav className="Mob-nav">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
     
                <div className="toggle-btn" >
                    <a href="#" onClick={Open}>
                        <FontAwesomeIcon icon={faBars} style={MyStyle} />
                    </a>
                </div>

                <div class="w3-dropdown-hover ">
      <button class="w3-button"> {lang.language} <img src={lang.Flag1} className='flag' alt="" /> <i class="fa fa-caret-down"></i> </button>
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button lang" onClick={Eng}>English <img src={English} className='flag' alt="" /> </a>
        <a href="#" class="w3-bar-item w3-button lang" onClick={Spanish}>Spanish <img src={Spain} className='flag' alt="" /> </a>

      </div>   */}
      </div>

                <div className="ul" id='drop'>
                    <div className="close-icon">
                        <img src={close} onClick = {Close} alt="" />
                    </div>
                    <div className="logo-Mob">
                        <img src={logo} alt="" />
                    </div>
                    <div className="mian-mob-cont">
                        {/* 1 */}
                    <div className="mob-cont ">
                    <div className="li1"> Home  </div>
                   


                    </div>
                 
                  
                    

                         {/* 3 */}
                         <div className="mob-cont">
                    <div className="li1"> Features</div>
                    <div className="img-submenu">
                        <img src={icon} alt="" onClick={OpenSub3} id = 'none3' />
                        <img src={icon} alt="" onClick={CloseSub3} id='rotate3' />
                    </div>


                    </div>
                   
                    <div className="ul-submenu" id='submenu'>
                        <ul id='a2'>
                            <li><a href="" >Coming Soon</a></li>
                            
                        </ul>
                    </div>

                        {/* 4 */}
                        <div className="mob-cont">
                    <div className="li1"> Contact  </div>
                


                    </div>
                   
                   

                 
                    
                    </div>
                    
                </div>

            </nav>
        </>
    )
}
