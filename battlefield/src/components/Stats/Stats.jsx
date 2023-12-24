import React from 'react'
import './Stats.css'
import {
    engineer_white, soldier_tank_white, acw_white, m9_white
} from "../../assets"
const Soldier = (data) => {
    console.log(data.data.level);
    console.log(data.data.soldier_stats);

  return (
    <>
     <div className='soldier_menu'>
        <ul>
        {data.data.soldier_menu && data.data.soldier_menu.length > 0 ? (data.data.soldier_menu.map((element, index) => (
         
            <li className='soldier_menu_list'>
                {index === 0 ? (
                <><span>WEAPONS</span> 
                <div>
                <span className='stats' key={index}>{element}/200</span> 
                </div>
                </>):undefined}
                {index === 1 ? (
                <><span>KITS</span> 
                <div>
                <span className='stats' key={index}>{element}/100</span> 
                </div>
                </>):undefined}
                {index === 2 ? (
                <><span>VEHICLES</span> 
                <div>
                <span className='stats' key={index}>{element}/80</span> 
                </div>
                </>):undefined}
                {index === 3 ? (
                <><span>MEDALS</span> 
                <div>
                <span className='stats' key={index}>{element}/50</span> 
                </div>
                </>):undefined}
                {index === 4 ? (
                <><span>ASSIGNMENTS</span> 
                <div>
                <span className='stats' key={index}>{element}/80</span> 
                </div>
                </>):undefined}
                {index === 5 ? (
                <><span>DOG TAGS</span> 
                <div>
                <span className='stats' key={index}>{element}/60</span> 
                </div>
                </>):undefined}
            </li>
        ))):
        (
                <p>No data available</p>
        )} 
        <li>
        <span>BATTLEPACKS</span>
        </li>
        </ul>
     </div>
     <div className='soldier_game_stats'>
        <div className='soldier_stats'>
       
        <ul>
        {data.data.soldier_stats && data.data.soldier_stats.length > 0 ? (data.data.soldier_stats.map((element, index) => (
         
           <li >
                {index === 0 && <span>WINS(%)</span>}
                {index === 1 && <span>SCORE/MIN</span>}
                {index === 2 && <span>KILLS/MIN</span>}
                <span key={index} className='soldier_stats_value' >{element}</span>
            </li>
            ))):
        (
           <p>No data available</p>
         )} 
        </ul>
       
        </div>
        <div className='soldier_top_stats'>
            <div className='soldier_top a'>
                <span className='soldier_top_title'>TOP VEHICLE</span>
                <img className='info_img' src={soldier_tank_white} alt=""/>
                <span className='soldier_top_description'>MAIN BATTLE TANK</span>
                <span className='soldier_top_value'>{data.data.tank}</span>
            </div>
            <div className='soldier_top b'>
            <span className='soldier_top_title'>TOP PRIMARY</span>
                <img className='info_img' src={acw_white} alt="" />
                <span className='soldier_top_description'>ACW-R</span>
                <span className='soldier_top_value'>{data.data.acw}</span>
            
            </div>
        </div>
        <div className='soldier_top_stats'>
            <div className='soldier_top c'>
            <span className='soldier_top_title'>TOP CLASS</span>
                <img className='engineer' src={engineer_white} alt="" />
                <span className='soldier_top_description'>ENGINEER</span>
                <span className='soldier_top_value'>{data.data.engineer}</span>
            
            </div>
            <div className='soldier_top d'>
            <span className='soldier_top_title'>TOP SIDEARM</span>
                <img className='gun' src={m9_white} alt="" />
                <span className='soldier_top_description'>M9</span>
                <span className='soldier_top_value'>{data.data.gun}</span>
            
            </div>
        </div>
     </div>
    </>
   
  )
}

export default Soldier;
