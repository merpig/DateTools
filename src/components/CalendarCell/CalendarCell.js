import "./CalendarCell.css";

const CallendarCell = ({day,onClick,selected}) => {
    return (
        <div 
            className={`calendar-cell ${selected}`} 
            onClick={onClick}
        >
            {day}
        </div>
    );
};
  
export default CallendarCell;