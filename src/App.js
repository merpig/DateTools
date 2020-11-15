import React, { useEffect, useState } from 'react';
import PageHeader from "./components/PageHeader/PageHeader";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar"
import Tabs from "./components/Tabs/Tabs";
import './App.css';

const  App = () => {
  const [activeTab,setActiveTab] = useState("Home");

  const tabComponents = {
    "Home":<Home/>,
    "Calendar":<Calendar />
  }

  return (
    <div className="App">
      <Card 
        border={false}
        title={<PageHeader/>}
        tabs={<Tabs active={activeTab} onClick={setActiveTab} tabs={Object.keys(tabComponents)}/>}
        content={tabComponents[activeTab]}
      />
    </div>
  );
}

export default App;
