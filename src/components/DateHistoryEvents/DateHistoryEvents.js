import {useState,useEffect} from 'react';
import "./DateHistoryEvents.css";



const DateHistoryEvents = ({events}) => {
    const [index,setIndex] = useState(0);
    const [range,setRange] = useState(5);

    const rangeList = [5,10,25];
    if(events.length>rangeList[2]) rangeList.push(events.length);

    useEffect(()=>{
       if(range>25&&events.length>25){
           setRange(events.length);
       }
    },[events,range]);

    return (
        <div className="tab-list">
            <div className="sorting-options container">
                <div className="row">
                    <div className="col-6">
                        <div className="range-selectors">
                            {rangeList.filter(e=>e<=events.length).map(rangeOption =>
                                <div 
                                    key={rangeOption}
                                    className={rangeOption===range?"range-selected":"range-selector"}
                                    onClick={()=>setRange(rangeOption)}
                                >
                                    {rangeOption>rangeList[2]?"All":rangeOption}
                                </div>
                            )}
                        </div>
                        <div className="tab-results-info">
                            {index+1}-{(index+range)<events.length?(index+range):events.length} of {events.length}
                        </div>
                        
                    </div>
                    <div className="dh-filters col-6">
                    </div>
                </div>
            </div>
            <ul>
                {events.filter((e,i)=>i>=index&&i<index+range).map((e,i)=><li key={i}>{e.text}</li>)}
            </ul>
        </div>
    );
};
  
export default DateHistoryEvents;