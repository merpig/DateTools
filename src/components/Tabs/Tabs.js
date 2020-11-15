import "./Tabs.css";

const Tabs = ({active,onClick,tabs}) => {
    return (
        <div className="tabs row">
                {tabs.map(tab=>
                    <div 
                        key={tab}
                        className={`${12%tabs.length===0?"col":"col"} ${active===tab?"active-tab":"tab"}`}
                        onClick={()=>onClick(tab)}
                    >
                        {tab}
                    </div>
                )}
        </div>  
    );
};
  
export default Tabs;