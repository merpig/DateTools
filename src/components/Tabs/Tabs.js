import "./Tabs.css";

const Tabs = ({active,onClick,tabs}) => {
    return (
        <div className="tabs container">
            <div className="row">
                {tabs.map(tab=>
                    <div 
                        key={tab}
                        className={`${12%tabs.length===0?"col-"+12/tabs.length:"col"} ${active===tab?"active-tab":"tab"}`}
                        onClick={()=>onClick(tab)}
                    >
                        {tab}
                    </div>
                )}
            </div>
        </div>  
    );
};
  
export default Tabs;