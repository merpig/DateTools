import "./DateHistoryTabs.css";

const TABS = ["Events","Births","Deaths","Holidays"];

const DateHistoryTabs = ({active,onClick}) => {
    return (
        <div className="datehistory-tabs container">
            <div className="row">
                {TABS.map(tab=>
                    <div 
                        key={tab}
                        className={`col-3 ${active===tab?"dh-active-tab":"dh-tab"}`}
                        onClick={()=>onClick(tab)}
                    >
                        {tab}
                    </div>
                )}
            </div>
        </div>  
    );
};
  
export default DateHistoryTabs;