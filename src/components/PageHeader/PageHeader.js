import {useEffect, useState} from 'react';
import "./PageHeader.css";

const PageHeader = props => {
    const [currentTime,setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
          }, 1000)
    }, []);

    return <div className="page-header"><h1>{currentTime}</h1></div>;
};
  
export default PageHeader;