import React, { useEffect, useState } from 'react';
import PageHeader from "./components/PageHeader/PageHeader";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Calendar from "./components/Calendar/Calendar";
import './App.css';
import { Route,Switch } from 'react-router-dom';

const  App = () => {
  const [selected,setSelected] = useState(new Date());
  useEffect(()=>{
    console.log("Selected day changed to "+selected);
  },[selected]);

  return (
    <div className="App">
      <PageHeader/>
      <Navbar />
      <Container>
        <div style={{width:"300px",height:"300px",margin:"auto"}}>
          <Switch>
            <Route path="/:base/:year/:month/:day" children={<Calendar setSelected={setSelected}/>}/>
            <Route path="*" children={<Calendar setSelected={setSelected}/>}/>
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;
