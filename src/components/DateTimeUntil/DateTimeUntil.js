import * as moment from 'moment';
import { useEffect, useState } from 'react';
import "./DateTimeUntil.css"
require('moment-precise-range-plugin');

const daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const timeDiff = selected => {
    let starts = moment(new Date());
    let ends   = moment(selected);
    return moment.preciseDiff(starts, ends, true);
} 

const DateTimeUntil = ({selected}) => {
    const [seconds,setSeconds] = useState(timeDiff(selected).seconds);
    const [minutes,setMinutes] = useState(timeDiff(selected).minutes);
    const [hours,setHours] = useState(timeDiff(selected).hours);
    const [days,setDay] = useState(timeDiff(selected).days);
    const [months,setMonths] = useState(timeDiff(selected).months);
    const [years,setYears] = useState(timeDiff(selected).years);
    const [firstDateWasLater,setFirstDateWasLater] = useState(timeDiff(selected).firstDateWasLater);
    const [selectedDate,setSelectedDate] = useState([selected.getDate(),selected.getMonth(),selected.getFullYear()].join(''));
    const [currentDate,setCurrentDate] = useState([new Date().getDate(),new Date().getMonth(),new Date().getFullYear()].join(''));
    const [contents,setContents] = useState(
        <div className="row today-row">
            <h2>Today</h2>
        </div>
    );
    const [tense,setTense] = useState("is");
    const [ending,setEnding] = useState("");

    useEffect(()=>{
        setSeconds(timeDiff(selected).seconds)
        setMinutes(timeDiff(selected).minutes)
        setHours(timeDiff(selected).hours)
        setDay(timeDiff(selected).days)
        setMonths(timeDiff(selected).months)
        setYears(timeDiff(selected).years)
        setFirstDateWasLater(timeDiff(selected).firstDateWasLater)
        setSelectedDate([selected.getDate(),selected.getMonth(),selected.getFullYear()].join(''))
        setCurrentDate([new Date().getDate(),new Date().getMonth(),new Date().getFullYear()].join(''))
        if(selectedDate===currentDate){
            setTense("is");
            setEnding("");
            setContents(<div className="row today-row">
                <h2>Today</h2>
            </div>);
        }
    
        else {
            if(firstDateWasLater){
                setTense("was");
                setEnding("in the past.");
                setContents(
                    <div className="row past-row">
                        <div className="time-until-counter row">
                            <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{years}</div>
                                <div className="time-block-type">
                                    {years===1?"Year":"Years"}
                                </div>
                            </div>
                            <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{months}</div>
                                <div className="time-block-type">
                                    {months===1?"Month":"Months"}
                                </div>
                            </div>
                            <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{days}</div>
                                <div className="time-block-type">
                                    {days===1?"Day":"Days"}
                                </div>
                            </div>
                        </div>
                    </div>);
            }
            else {
                setTense("is");
                setEnding("from now.");
                setContents(
                    <div className="row future-row">
                        <div className="time-until-counter row">
                        <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{years}</div>
                                <div className="time-block-type">
                                    {years===1?"Year":"Years"}
                                </div>
                            </div>
                            <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{months}</div>
                                <div className="time-block-type">
                                    {months===1?"Month":"Months"}
                                </div>
                            </div>
                            <div className="time-until-counter-block col-xl-4">
                                
                                <div className="time-block-time">{days}</div>
                                <div className="time-block-type">
                                    {days===1?"Day":"Days"}
                                </div>
                            </div>
                            <div className="timer-row row">
                                <div className="time-dif col">{hours}</div>:
                                <div className="time-dif col">{minutes}</div>:
                                <div className="time-dif col">{seconds}</div>
                            </div>
                            <div className="future-row">
                                {ending}
                            </div>
                        </div>
                        
                        
                    </div>);
            }
        }
        
    },[currentDate, days, firstDateWasLater, hours, minutes, months, seconds, selected, selectedDate, years]);

    const updateTimes = () => {
        setSeconds(timeDiff(selected).seconds)
        setMinutes(timeDiff(selected).minutes)
        setHours(timeDiff(selected).hours)
    }
    

    useEffect(()=>{
        window.setInterval(() => {
                
            updateTimes();
                
        }, 1000);
        return window.clearInterval();  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    



    return (
        <div className="time-until-container">
            <div className="time-until-title">
                {selected.getMonth()+1}/{selected.getDate()}/{selected.getFullYear()} {tense} a {daysArray[selected.getDay()]}
            </div>
            <div className="time-until-title-contents">
                {contents}
            </div>
            
        </div>
    );
};
  
export default DateTimeUntil;