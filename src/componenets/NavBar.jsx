import React,{useState} from 'react'
// import HoverMenu from '../Hover.js'
import logo from '../img/logo.png'
import English from '../img/united-kingdom.png'
import Spain from '../img/spain.png'
export default function NavBar() {
  // const Eng = document.getElementById("Lang")
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

    <div class="w3-container">

<div className="logo-Main">
  <img src={logo} alt="" />
</div>
  <div class="w3-bar ">
    <div class="w3-dropdown-hover ">
      <button class="w3-button">Home </button>
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Cryptocurrency</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">ICO Donation</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">NFT Shop</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Corporate</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Boxed Version</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
      </div> */}
    </div>
    {/* <div class="w3-dropdown-hover ">
      <button class="w3-button">Pages</button> */}
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Cryptocurrency</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">ICO Donation</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">NFT Shop</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Corporate</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Boxed Version</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
      </div> */}
    {/* </div> */}
    <div class="w3-dropdown-hover ">
      <button class="w3-button">Feature </button>
      <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Coming Soon</a>

      </div>
    </div>
    <div class="w3-dropdown-hover ">
      {/* <button class="w3-button">Store</button> */}
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Cryptocurrency</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">ICO Donation</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">NFT Shop</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Corporate</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Boxed Version</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
      </div> */}
    </div>
    <div class="w3-dropdown-hover ">
      {/* <button class="w3-button">Blog</button> */}
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Cryptocurrency</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">ICO Donation</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">NFT Shop</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Corporate</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Boxed Version</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
      </div> */}
    </div>
    <div class="w3-dropdown-hover ">
      <button class="w3-button">Contact</button>
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button w3-mobile">Cryptocurrency</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">ICO Donation</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">NFT Shop</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Corporate</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Boxed Version</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Elementor Demo</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile">Video Background Demo</a>
      </div> */}
    </div>
    <div class="w3-dropdown-hover btn-lang">
      <button class="w3-button"> {lang.language} <img src={lang.Flag1} className='flag' alt="" /> </button>
      {/* <div class="w3-dropdown-content w3-bar-block w3-cus">
        <a href="#" class="w3-bar-item w3-button lang" onClick={Eng}>English <img src={English} className='flag sub' alt="" /> </a>
        <a href="#" class="w3-bar-item w3-button lang" onClick={Spanish}>Spanish <img src={Spain} className='flag sub' alt="" /> </a>

      </div>   */}
    </div>
    
  
  </div>
  <button type="button" class="btn btn-outline-light btn-nav">Login & SignUp</button>
</div>
      {/* <nav className='Main-Nav'>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation-options">
          <ul className='main-ul'>
            <li><a href="#" id='List1'> Home </a>
              <ul className="sublist list1">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>
            <li><a href="#" id='List2'> Home </a>
              <ul className="sublist list2">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>
            <li><a href="#" id='List3'> Home </a>
              <ul className="sublist list3">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>

            <li><a href="#" id='List3'> Home </a>
              <ul className="sublist list3">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>








          </ul>
        </div>
        <div className="lang-main">
          <ul className=" main-ul   lan-ul">
            <li><a href="#" id='List3'> English </a>
              <ul className="sublist list3">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Home </a></li>
              </ul>

            </li>
          </ul>
        </div>
        <div className="nav-btn"><button>Login & SignUp</button></div>
      </nav> */}
    </>
  )
}

