import {useState} from 'react';
import CalendarSingle from "../CalendarSingle/CalendarSingle";
import DateHistory from "../DateHistory/DateHistory";
import "./Home.css"
import utils from "../../utils";

const Home = () => {
    const [selected,setSelected] = useState(utils.dateFromUrl(window.location));

    return (
        <div className="row">
            <div className="col-md-4 date-handlers">
                    <div className="row">
                        <CalendarSingle selected={selected} setSelected={setSelected}/>
                    </div>
                    <div className="row flex-fill-height">
                        <div className="date-search">Date search here</div>
                    </div>
            </div>
            <div className="col-md-8">
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
    );
};
  
export default Home;