import { useState } from "react";
import "./DateSearch.css";

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const getMaxDay = (y,m) =>{
    return new Date(y, m + 1, 0).getDate();
}

const DateSearch = ({selected,setSelected}) => {
    const [month,setMonth] = useState(selected.getMonth());
    const [year,setYear] = useState(selected.getFullYear());
    const [day,setDay] = useState(selected.getDate());

    const days = [];
    for(let i = 1; i<=31;i++)days.push(i);

    const monthOnChange = e => setMonth(months.indexOf(e.target.value));

    const dayOnChange = e => setDay(parseInt(e.target.value));

    const yearChange = e => parseInt(e.target.value)?setYear(e.target.value):null;

    const submitYear = () => 
        new Date(year,month,day).toString()!=="Invalid Date"?
            setSelected(new Date(year.toString(),month,day)):
            null

    return (
        <div className="date-search-container">
            <select defaultValue={months[selected.getMonth()]} onChange={monthOnChange}>
                {months.map((month,i)=>
                    <option key={i} value={month}>{month}</option>
                )}
            </select>
            <select defaultValue={selected.getDate()} onChange={dayOnChange}>
                {days
                    .filter(d=>d<=getMaxDay(year,month))
                    .map((day,i)=>
                        <option key={i} value={day}>{day}</option>
                )}
            </select>
            <input type="number" onChange={yearChange} defaultValue={selected.getFullYear()}/>
            <button className="search-button btn" onClick={submitYear}>Search</button>
        </div>
    );
};
  
export default DateSearch;