import {useState} from 'react';
import CalendarCell from "../CalendarCell/CalendarCell";
import "./Calendar.css";
import { useParams } from "react-router";
import {Link} from 'react-router-dom'

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const monthPartials = {
    "jan":"January",
    "feb":"February",
    "mar":"March",
    "apr":"April",
    "may": "May",
    "jun": "June",
    "jul": "July",
    "aug": "August",
    "sep": "September",
    "oct": "October",
    "nov": "November",
    "dec": "December"
}

const base = ["S","M","T","W","T","F","S"];

function monthRows(year,month){
    let minDay = 1;
    let maxDay = new Date(year, month+1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];

    if(firstDay>0) minDay-=firstDay;
    for(let i = minDay;i<=maxDay;i++){
        const day = new Date(year, month, i).getDay();
        days.push(new Date(year, month, i));
        if(i===maxDay&&day<6) maxDay++;
    }

    return days;
}

function parsedDate(date){
    //console.log(date.getFullYear().toString()+date.getMonth().toString()+date.getDate().toString());
    return date.getFullYear().toString()+date.getMonth().toString()+date.getDate().toString();
}

function parseUrl({year,month,day}){
    console.log(year,month,day)
    let validYear = "";
    let validMonth = "";

    let min = 0;
    let max;

    if(parseInt(year)!==NaN&&parseInt(year)>=0){
        validYear+=parseInt(year);
    }
    else return new Date();

    if(monthPartials[month]){
        validMonth+=(months.indexOf(monthPartials[month]));
    }
    else return new Date();

    max = new Date(validYear,(parseInt(validMonth)+1).toString(),0).getDate();

    if(parseInt(day)>min&&parseInt(day)<=max){
        return new Date(validYear,validMonth,parseInt(day));
    }

    return new Date();
}

const Calendar = props => {
    const dateFromUrl = parseUrl(useParams());
    const [month,setMonth] = useState(dateFromUrl.getMonth());
    const [year,setYear] = useState(dateFromUrl.getFullYear());
    const [selected,setSelected] = useState(dateFromUrl);

    const subtractMonth=()=>{
        if(month>0) setMonth(month-1);
        else {
            setMonth(11);
            setYear(year-1);
        }
    }

    const addMonth=()=>{
        if(month<11) setMonth(month+1);
        else {
            setMonth(0);
            setYear(year+1);
        }
    }

    const dayClick=(year,month,day)=>{
        let monthPartial = months[month].toLowerCase().slice(0,3);
        let stateObj = { id: "100" };
        window.history.pushState(stateObj, 
                    "DateTools", `/DateTools/${year}/${monthPartial}/${day}`);
        setSelected(new Date([year.toString(),(month+1).toString(),day]));
        props
            .setSelected(new Date([year.toString(),(month+1).toString(),day]));
    }

    return (
        <div className="calendar-container">
            <div className="calendar-title-container">
                <div className="calendar-left-arrow calendar-arrow" onClick={subtractMonth}>{"<"}</div>
                <div className="calendar-title" style={{width:"100%"}}>
                    {months[month] + ", " + year}
                </div>
                <div className="calendar-right-arrow calendar-arrow" onClick={addMonth}>{">"}</div>
            </div>
            <div className="calendar-body">
                <div className="calendar-body-content">
                    {base.map((day,i)=>
                        <CalendarCell 
                            key={i} 
                            day={day}
                            color={"rgb(230,230,230)"}
                            onClick={()=>{}}
                            borderRadius={"0%"}
                            borderColor={"rgb(230,230,230)"}
                        />
                    )}
                    {monthRows(year,month).map((day,i)=>{
                        return day.getMonth()!==month?
                            <CalendarCell 
                                key={i}
                                onClick={()=>{}}
                            />:
                            <CalendarCell 
                                key={i} 
                                day={day.getDate()} 
                                borderColor={parsedDate(day)===parsedDate(selected)?"black":""}
                                onClick={()=>dayClick(day.getFullYear(),day.getMonth(),day.getDate())}
                            />
                    })}
                </div>
            </div>
        </div>
    );
};
  
export default Calendar;