import {useState,useEffect} from 'react';
import Tabs from "../Tabs/Tabs";
import Card from "../Card/Card";
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
];

const tabsShort = [
    "Events",
    "Births",
    "Deaths",
    "Holidays"
];

async function scrapeSite(url,setTabData){
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data.parse.text);
    let data = {};

    $('h2').each((i, elem) => {
        if (i > 0 && i <= 4) {
            data[$(elem).text().trim().replace('[edit]','')]=[];
        }
    });

    //console.log(data);

    $('ul').each((i, elem) => {
        if(elem.prev&&elem.prev.prev){
            const elemHeader = $(elem.prev.prev).text().trim().replace('[edit]','')
            if (tabs.includes(elemHeader)) {
                // console.log($(elem.prev.prev).text().trim())
                // console.log("---------------------------------");
                $(elem).children().each((i, child) =>{
                    //if(elemHeader==="Holidays and observances")
                    // console.log(
                    //     child
                    //         .children
                    //         .filter(c=>c.name==="ul").length?
                    //         child
                    //             .children
                    //             .filter(c=>c.name==="ul")[0]
                    //             .children
                    //             .filter(node=>node.name)
                    //             .map(node=>$(node).text())
                    //         :[]
                            // .filter(c=>[c.data,c.title])
                            // .map(e=>e.attribs?e.children[0].data:e.data)
                            // .join(" ")
                            // .replace(/\s+/g, " ")
                            
                    //);
                    data[elemHeader].push({
                        text:child
                                .children
                                .filter(c=>[c.data,c.title])
                                .map(e=>e.attribs?e.children[0].data:e.data)
                                .join(" ")
                                .replace(/\s+/g, " "),
                        subText:child
                                .children
                                .filter(c=>c.name==="ul").length?
                                child
                                    .children
                                    .filter(c=>c.name==="ul")[0]
                                    .children
                                    .filter(node=>node.name)
                                    .map(node=>$(node).text())
                                :[]
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
        const url = `https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=${months[month-1]}_${day}&prop=text&formatversion=2&format=json`;
        scrapeSite(url,setTabData);
    },[day, month]);

    useEffect(()=>{
        if(!events.length) return;
        const activeMatch = {
            Births:births,Deaths:deaths,Holidays:holidays,Events:events
        };
        setActiveTabComponent(<Events events={activeMatch[activeTab]}/>);
    },[events, activeTab, births, deaths, holidays]);

    return (
        <Card
            border={true}
            title={`On ${months[month-1]} ${day} in history`}
            tabs={<Tabs active={activeTab} onClick={setActiveTab} tabs={tabsShort}/>}
            content={activeTabComponent}
        />
    );
};
  
export default DateHistory;