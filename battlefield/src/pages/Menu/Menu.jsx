import React,{useState} from 'react'
import { Navbar,Soldier,Home,More,Multiplayer,Store,Campaign } from '../../components'
import {menu__background} from '../../assets/';
const Menu = () => {
  const [currentScreen,setScreen] = useState(undefined);
  const backgroundStyle = {
    backgroundImage: `url(${menu__background})`,
    'min-height': '100vh',
  };
  const handleScreenChange = (screenname) => {
    console.log(screenname);
    setScreen(screenname);
    
};
  return (
    <div className="App" style={backgroundStyle}>
    <Navbar ScreenChange={handleScreenChange}/>
    <div className="main-container">
        {
         currentScreen==="Soldier" ? (<Soldier ScreenChange={handleScreenChange}/>) : 
         currentScreen==="Multi" ? (<Multiplayer/>) : 
         currentScreen==="More" ? (<More/> ) : 
         currentScreen==="Store" ? (<Store/>) : 
         currentScreen==="Campaign" ? (<Campaign/>) : 
         (<Home/>) 
        }
        </div>
    </div>
  )
}

export default Menu;
