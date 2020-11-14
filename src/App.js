import React, { useEffect, useState } from 'react';
import PageHeader from "./components/PageHeader/PageHeader";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Calendar from "./components/Calendar/Calendar";
import DateHistory from "./components/DateHistory/DateHistory";
import './App.css';
import utils from "./utils";

const  App = () => {
  const [selected,setSelected] = useState(utils.dateFromUrl(window.location));

  useEffect(()=>{
    //console.log("Selected day changed to "+selected);
  },[selected]);

  return (
    <div className="App">
      <PageHeader/>
      <Navbar />
      <Container>
        <div style={{width:"300px",height:"300px",margin:"auto"}}>
          <Calendar selected={selected} setSelected={setSelected}/>
        </div>
        <div style={{width:"100%"}}>
          <DateHistory 
            selected={selected}
            month={selected.getMonth()+1}
            year={selected.getFullYear()}
            day={selected.getDate()}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
