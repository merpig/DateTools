import React, { useEffect, useState } from 'react';
import PageHeader from "./components/PageHeader/PageHeader";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar"
import Tabs from "./components/Tabs/Tabs";
import './App.css';
import utils from "./utils";

const tabs = [
  "Home",
  "Calendar"
]

const  App = () => {
  const [selected,setSelected] = useState(utils.dateFromUrl(window.location));

  const tabComponents = {
    "Home":<Home selected={selected} setSelected={setSelected}/>,
    "Calendar":<Calendar />
  }
  const [activeTab,setActiveTab] = useState("Home");
  const [activeTabComponent,setActiveTabComponent] = useState(tabComponents["Home"]);

  useEffect(()=>{
    const tabComponents = {
      "Home":<Home selected={selected} setSelected={setSelected}/>,
      "Calendar":<Calendar />
    }
    setActiveTabComponent(tabComponents[activeTab]);
  },[activeTab, selected])

  return (
    <div className="App">
      <PageHeader/>
      <Tabs active={activeTab} onClick={setActiveTab} tabs={tabs}/>
      <Container>
        {activeTabComponent}
      </Container>
    </div>
  );
}

export default App;
