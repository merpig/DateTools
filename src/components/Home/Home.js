import CalendarSingle from "../CalendarSingle/CalendarSingle";
import DateHistory from "../DateHistory/DateHistory";

const Home = ({selected,setSelected}) => {
    return (
        <div className="home row">
            <div className="col-md-3">
                <div className="row" style={{maxHeight:"50%"}}>
                    <CalendarSingle selected={selected} setSelected={setSelected}/>
                </div>
            </div>
            <div className="col-md-9">
                <DateHistory 
                    selected={selected}
                    month={selected.getMonth()+1}
                    year={selected.getFullYear()}
                    day={selected.getDate()}
                />
            </div>
        </div>
    );
};
  
export default Home;