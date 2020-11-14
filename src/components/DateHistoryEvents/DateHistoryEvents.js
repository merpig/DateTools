import {useState,useEffect} from 'react';
import "./DateHistoryEvents.css";

const DateHistoryEvents = ({events}) => {
    const [index,setIndex] = useState(0);
    const [range,setRange] = useState(5);

    const rangeList = [5,10,25].filter(e=>e<=events.length);
    if(events.length>rangeList[rangeList.length-1]) rangeList.push(events.length);

    useEffect(()=>{
       events.length>=5?setRange(5):setRange(events.length);
    },[events]);

    return (
        <div className="tab-list">
            <div className="sorting-options container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="range-selectors">
                            {rangeList.filter(e=>e<=events.length).map(rangeOption =>
                                <div 
                                    key={rangeOption}
                                    className={rangeOption===range?"range-selected":"range-selector"}
                                    onClick={()=>setRange(rangeOption)}
                                >
                                    {[5,10,25].includes(rangeOption)?rangeOption:"All"}
                                </div>
                            )}
                        </div>
                        <div className="tab-results-info">
                            {index+1}-{(index+range)<events.length?(index+range):events.length} of {events.length}
                        </div>
                        
                    </div>
                    <div className="dh-filters col-sm-6">
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