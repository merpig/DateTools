import {useState} from 'react';
import CalendarCell from "../CalendarCell/CalendarCell";
import "./Calendar.css";

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

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
    return date.getFullYear().toString()+date.getMonth().toString()+date.getDate().toString();
}

const Calendar = ({selected,setSelected}) => {
    const [month,setMonth] = useState(selected.getMonth());
    const [year,setYear] = useState(selected.getFullYear());

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
        if(selected.toLocaleDateString()===new Date(year.toString(),month.toString(),day).toLocaleDateString()) return;

        let monthPartial = months[month].toLowerCase().slice(0,3);
        let stateObj = { id: "100" };
        
        window.location.host.split(":")[0]==="localhost"|| window.location.host.split(":")[0]==="DateTools"?
        window.history.pushState(stateObj, 
                    "DateTools", `/#/${year}/${monthPartial}/${day}`):
        window.history.pushState(stateObj, 
            "DateTools", `/DateTools/#/${year}/${monthPartial}/${day}`)
        setSelected(new Date(year.toString(),month.toString(),day));
    }

    return (
        <div className="calendar-container">
            <div className="calendar-title-container">
                <div className="calendar-left-arrow calendar-arrow" onClick={subtractMonth}>{"<"}</div>
                <div className="calendar-title">
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
                            onClick={()=>{}}
                            selected="header-cell"
                        />
                    )}
                    {monthRows(year,month).map((day,i)=>{
                        return day.getMonth()!==month?
                            <CalendarCell 
                                key={i}
                                onClick={()=>{}}
                                selected=""
                            />:
                            <CalendarCell 
                                key={i} 
                                day={day.getDate()} 
                                onClick={()=>dayClick(day.getFullYear(),day.getMonth(),day.getDate())}
                                selected={parsedDate(day)===parsedDate(selected)?"active-cell":""}
                            />
                    })}
                </div>
            </div>
        </div>
    );
};
  
export default Calendar;