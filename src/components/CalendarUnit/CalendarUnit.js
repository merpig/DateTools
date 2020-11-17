import { useState } from 'react';
import CalendarCell from "../CalendarCell/CalendarCell";
import "../CalendarSingle/CalendarSingle.css";

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const base = ["S", "M", "T", "W", "T", "F", "S"];

function monthRows(year, month) {
    let minDay = 1;
    let maxDay = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];

    if (firstDay > 0) minDay -= firstDay;
    for (let i = minDay; i <= maxDay; i++) {
        const day = new Date(year, month, i).getDay();
        days.push(new Date(year, month, i));
        if (i === maxDay && day < 6) maxDay++;
    }

    return days;
}

const CalendarSingle = ({ month, year }) => {

return (
    <div className="calendar-wrapper">
        <div className="calendar-container">
            <div className="calendar-title-container">
                <div className="calendar-title">{months[month]}</div>
            </div>
            <div className="calendar-body">
                <div className="calendar-body-content">
                    {base.map((day, i) =>
                        <CalendarCell
                            key={i}
                            day={day}
                            onClick={() => { }}
                            selected="header-cell"
                        />
                    )}
                    {monthRows(year, month).map((day, i) => {
                        return day.getMonth() !== month ?
                            <CalendarCell
                                key={i}
                                onClick={() => { }}
                                selected=""
                            /> :
                            <CalendarCell
                                key={i}
                                day={day.getDate()}
                                onClick={() => {}}
                                selected={""}
                            />
                    })}
                </div>
            </div>
        </div>
    </div>
);
                }

export default CalendarSingle;