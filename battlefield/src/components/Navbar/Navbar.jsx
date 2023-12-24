import React,{useState} from 'react'
import {
  home_logo, home_level
} from "../../assets"
import './Navbar.css'

function Navbar({ScreenChange}) {
  const [sC,SetsC] = useState(undefined);
  const changeCurrentScreen = (screenName) =>{
    // console.log(screenName)
    SetsC(screenName);
    ScreenChange(screenName);

};
 return (
    <div className='nav'>
      <div>
        <ul className='navbar-ul'>
          <li onClick={()=>changeCurrentScreen("Home")} className={sC === 'Home' ? 'selected' : ''}>
            HOME
          </li>
          <li onClick={()=>changeCurrentScreen("Multi")} className={sC === 'Multi' ? 'selected' : ''}>
            MULTIPLAYER
          </li>
          <li onClick={()=>changeCurrentScreen("Campaign")} className={sC === 'Campaign' ? 'selected' : ''}>
            CAMPAIGN
          </li>
          <li onClick={()=>changeCurrentScreen('Soldier')} className={sC === 'Soldier' ? 'selected' : ''}>
            SOLDIER
          </li>
          <li onClick={()=>changeCurrentScreen("Store")} className={sC === 'Store' ? 'selected' : ''}>
            STORE
          </li>
          <li onClick={()=>changeCurrentScreen("More")} className={sC === 'More' ? 'selected' : ''}>
            MORE
          </li>
        </ul>
        </div> 
      
      <div>
      <img  src={home_level}  className='homelevel' alt="" />
      <img className='home_logo' src={home_logo}  alt="" />
      </div>
    </div>
  )
}

export default Navbar
