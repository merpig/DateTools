import {useState,useEffect} from 'react';
import DateHistoryTabs from "../DateHistoryTabs/DateHistoryTabs";
import Events from "../DateHistoryEvents/DateHistoryEvents"
import axios from 'axios';
import cheerio from 'cheerio';
import "./DateHistory.css";

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const tabs = [
    "Events",
    "Births",
    "Deaths",
    "Holidays and observances"
]

async function scrapeSite(url,setTabData){
    const html = await axios.get(url);
    //console.log(html.data.parse.text);
    const $ = await cheerio.load(html.data.parse.text);
    let data = {};

    $('h2').each((i, elem) => {
        if (i > 0 && i <= 4) {
            data[$(elem).text().trim().replace('[edit]','')]=[];
        }
    });

    console.log(data);

    $('ul').each((i, elem) => {
        if(elem.prev&&elem.prev.prev){
            const elemHeader = $(elem.prev.prev).text().trim().replace('[edit]','')
            if (tabs.includes(elemHeader)) {
                // console.log($(elem.prev.prev).text().trim())
                // console.log("---------------------------------");
                $(elem).children().each((i, child) =>{
                    // console.log(child.children)
                    // console.log(
                    //     child
                    //         .children
                    //         .filter(c=>[c.data,c.title])
                    //         .map(e=>e.attribs?e.children[0].data:e.data)
                    //         .join(" ")
                    //         .replace(/\s+/g, " "));
                    data[elemHeader].push({
                        text:child
                                .children
                                .filter(c=>[c.data,c.title])
                                .map(e=>e.attribs?e.children[0].data:e.data)
                                .join(" ")
                                .replace(/\s+/g, " ")
                    })
                });
            }
        }
    });

    setTabData(data);
}

const DateHistory = ({month,day,year}) => {
    const [activeTab,setActiveTab] = useState("Events");
    const [activeTabComponent,setActiveTabComponent] = useState();
    const [events,setEvents] = useState([]);
    const [births,setBirths] = useState([]);
    const [deaths,setDeaths] = useState([]);
    const [holidays,setHolidays] = useState([]);

    const setTabData=(data)=>{
        setEvents(data["Events"]);
        setBirths(data["Births"]);
        setDeaths(data["Deaths"]);
        setHolidays(data["Holidays and observances"]);
    }



    useEffect(()=>{
        console.log("Component loaded");
        const url = 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&page='+months[month-1]+'_'+day+'&prop=text&formatversion=2&format=json';
        scrapeSite(url,setTabData);
    },[day, month]);

    useEffect(()=>{
        if(!events.length) return;
        console.log(activeTab);
        switch(activeTab){
            case 'Births':
                setActiveTabComponent(<Events events={births}/>);
                break;
            case 'Deaths':
                setActiveTabComponent(<Events events={deaths}/>);
                break;
            case 'Holidays':
                setActiveTabComponent(<Events events={holidays}/>);
                break;
            case 'Events': 
                setActiveTabComponent(<Events events={events}/>);
                break;
            default:
        }
    },[events, activeTab, births, deaths, holidays]);

    return (
        <div className="datehistory-container">
            <div className="datehistory-title-container">
                <div className="datehistory-title">
                    On 
                    <div className="datehistory-title-date">
                        {months[month-1]} {day}
                    </div>
                    in history
                </div>
            </div>
            <DateHistoryTabs active={activeTab} onClick={setActiveTab}/>
            <div className="datehistory-body container">
                {activeTabComponent}
            </div>
        </div>
    );
};
  
export default DateHistory;