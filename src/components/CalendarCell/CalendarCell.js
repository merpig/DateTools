import "./CalendarCell.css";

const CallendarCell = props => {
    return (
        <div 
            className="calendar-cell" 
            style={{
                minWidth:100*1/7+"%",
                maxWidth:100*1/7+"%",
                height:100/7+"%",
                backgroundColor:props.color,
                borderRadius:props.borderRadius,
                borderColor:props.borderColor
            }}
            onClick={props.onClick}
        >
            {props.day}
        </div>
    );
};
  
export default CallendarCell;