import {useState} from 'react';
import CalendarSingle from "../CalendarSingle/CalendarSingle";
import DateHistory from "../DateHistory/DateHistory";
import DateSearch from "../DateSearch/DateSearch";
import DateTimeUntil from "../DateTimeUntil/DateTimeUntil";
import Card from "../Card/Card";
import "./Home.css"
import utils from "../../utils";

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const Home = () => {
    const [selected,setSelected] = useState(utils.dateFromUrl(window.location));



    return (
        <div className="home">
            <div className="row">
                <DateSearch selected={selected} setSelected={setSelected}/>
                <div className="day-selected-title">
                    Showing date information for {days[selected.getDay()]} {months[selected.getMonth()]} {selected.getDate()}, {selected.getFullYear()}
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 date-handlers">
                        <div className="row">
                            <CalendarSingle selected={selected} setSelected={setSelected}/>
                        </div>
                        <div className="row flex-fill-height">
                            <div className="fill-remaining-space">
                                <DateTimeUntil selected={selected}/>
                            </div>
                        </div>
                </div>
                <div className="col-md additional-col-styling">
                        <Card
                            border={true}
                            title={`TOP 10 Music Playlist for ${selected.getMonth()+1}/${selected.getDate()}/${selected.getFullYear()}`}
                            content={<div className="fill-space"></div>}
                        />
                </div>
                <div className="col-xl">
                    <div className="row">
                        <DateHistory 
                            selected={selected}
                            month={selected.getMonth()+1}
                            year={selected.getFullYear()}
                            day={selected.getDate()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Home;