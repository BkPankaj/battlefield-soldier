import React, { useEffect,useState} from 'react'
import './Soldier.css'
import Stats from '../Stats/Stats'
import {
    soldier_look, home_level
} from "../../assets"




const Soldier = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://battlefield-backend.onrender.com/api/data')
          .then((response) => response.json())
          .then((data) => {console.log('Fetched data:', data);setData(data);})
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

      console.log(data.level);
    // console.log(data.data.name);
  return (
    <section className='container' >
    <div className="soldier">
         <div className='soldier_content'>
             <img src={soldier_look} className='soldier_image' alt="" />
            <div className='soldier_content_w'>
                <div className='soldier_info'>
                    <img src={home_level} className='home_level' alt="" />
                    <div className='soldier_level_info'>
                        <span className='soldier_name'>{data.name}</span>
                        <div className='soldier_level_stats'>
                        <ul>
                            <li className='soldier_level_stats_a'>
                                {data.level}
                            </li>
                            <li>
                                {data.level_score} / 100
                            </li>
                            <li>
                            - Estimated rank up in 1h
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
                <div className='soldier_select'>
                    {data && (
                    <Stats data={data}/>
                    )}
                </div>
            </div>
        </div>
       
    </div>
    </section>
  )
}

export default Soldier;
