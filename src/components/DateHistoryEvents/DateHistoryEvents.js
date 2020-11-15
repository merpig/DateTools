import { useState, useEffect } from 'react';
import "./DateHistoryEvents.css";

function reverse(array) {
    return array.map((item, idx) => array[array.length - 1 - idx])
}

const DateHistoryEvents = ({ events }) => {
    const [index, setIndex] = useState(0);
    const [range, setRange] = useState(5);
    const [reverseEvents, setReverseEvents] = useState(true);

    const rangeList = [5, 10, 25].filter(e => e <= events.length);

    if (events.length > rangeList[rangeList.length - 1]) rangeList.push(events.length);

    useEffect(() => {
        events.length >= 5 ? setRange(5) : setRange(events.length);
        setIndex(0);
        setReverseEvents(true);
    }, [events]);

    const backPage = () => {
        if (index > 0) {
            index - range >= 0 ? setIndex(index - range) : setIndex(0);
        }
    }

    const forwardPage = () => {
        if (index < events.length - range) {
            setIndex(index + range)
        }
    }

    const validateInput = (e) => {
        let currentVal = e.target.value;
        console.log(e.key);
        if (e.key === "Backspace") {
            e.target.value = e.target.value.substring(0, currentVal.length - 1);

            if (!isNaN(range * parseInt(e.target.value) - range)) {
                setIndex(range * parseInt(e.target.value) - range);
            };
        }
        else if (!isNaN(parseInt(e.key))) {
            let parsedInt = parseInt(currentVal + e.key);
            if (parsedInt > 0 && parsedInt <= (Math.floor(events.length / range) + 1)) {
                e.target.value = currentVal + e.key;
                setIndex(range * parseInt(e.target.value) - range);
            }
        }
        e.preventDefault();
    }

    return (
        <div className="tab-list">
                <div className="range-selectors">
                    {rangeList.filter(e => e <= events.length).map(rangeOption =>
                        <div
                            key={rangeOption}
                            className={rangeOption === range ? "range-selected" : "range-selector"}
                            onClick={() => setRange(rangeOption)}
                        >
                            {[5, 10, 25].includes(rangeOption) ? rangeOption : "All"}
                        </div>
                    )}
                </div>
                <div className="tab-results-info">
                    {index + 1}-{(index + range) < events.length ? (index + range) : events.length} of {events.length}
                </div>
                <div className="dh-filter" onClick={() => setReverseEvents(!reverseEvents)}>
                    {reverseEvents ? "▼ Reverse" : "▲ Reverse"}
                </div>
            <div className="tab-list-contents">
                    <ul>
                        {reverseEvents ?
                            reverse(events)
                                .filter((e, i) => i >= index && i < index + range)
                                .map((e, i) =>
                                    <li key={i}>
                                        {e.text}
                                        {e.subText.length ?
                                            <ul>
                                                {e.subText.map(s => <li key={s}>{s}</li>)}
                                            </ul> : e.subText}
                                    </li>) :

                            events
                                .filter((e, i) => i >= index && i < index + range)
                                .map((e, i) =>
                                    <li key={i}>
                                        {e.text}
                                        {e.subText.length ?
                                            <ul>
                                                {e.subText.map(s => <li key={s}>{s}</li>)}
                                            </ul> : e.subText}
                                    </li>)
                        }
                    </ul>
            </div>
 
            <div className="page-selectors">
                <div
                    className="page-selector"
                    onClick={backPage}
                >
                    {"<"}
                </div>
                <input
                    className="page-number"
                    value={Math.floor(index / range) + 1}
                    onKeyDown={validateInput}
                    onChange={() => { }}
                    onMouseMove={(e) => e.preventDefault()}
                >
                </input>
                <div
                    className="page-selector"
                    onClick={forwardPage}
                >
                    {">"}
                </div>
            </div>
            <div className="page-info">
                Page
            </div>
                
        </div>
    );
};

export default DateHistoryEvents;