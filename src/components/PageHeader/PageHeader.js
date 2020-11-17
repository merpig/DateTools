import Axios from 'axios';
import {useEffect, useState} from 'react';

import "./PageHeader.css";

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const PageHeader = ({location,weather}) => {
    const [currentTime,setCurrentTime] = useState(new Date().toLocaleString());
    const [currentDay,setCurrentDay] = useState(new Date().getDay())

    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
            if(currentDay!==new Date().getDay()){
                setCurrentDay(new Date().getDay());
            }
          }, 1000)
    }, [currentDay]);

    return (
        <div className="page-header">
            <h4>{days[currentDay] + ", " + currentTime}</h4>
            <h4>{location}</h4>
            <h4>{weather}</h4>
        </div>);
};
  
export default PageHeader;