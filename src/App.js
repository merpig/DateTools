import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PageHeader from "./components/PageHeader/PageHeader";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar"
import Tabs from "./components/Tabs/Tabs";
import './App.css';

async function getLocation(setLocation) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLocation,error);
  }

  function error(error){
    console.log(error);
  }

}

const  App = () => {
  const [activeTab,setActiveTab] = useState("Home");
  const [location,setLocation] = useState();
  const [localWeather,setLocalWeather] = useState();

  

  useEffect(()=>{
    async function setCurrentLocation(position) {
      if(location) return;
      var GEOCODING = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
      const res = await axios.get(GEOCODING);
      const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=123c202ae147ce1a36f513e0a54fd90f`)
      // console.log(res,weatherRes);
      // console.log((weatherRes.data.main.temp * 9/5 - 459.67).toFixed(2)+"°F",weatherRes.data.weather[0].main)
      //console.log(res.data.city,res.data.principalSubdivision)
      weatherRes.data.sys.country="US"?
        setLocalWeather(
          [
            Math.floor(weatherRes.data.main.temp * 9/5 - 459.67)+"°F",
            weatherRes.data.weather[0].main,
            "H:"+Math.floor(weatherRes.data.main.temp_max * 9/5 - 459.67)+"°F",
            "L:"+Math.floor(weatherRes.data.main.temp_min * 9/5 - 459.67)+"°F"
          ].join(" ")):
        setLocalWeather(
          [
            Math.floor(weatherRes.data.main.temp - 273.15)+"°C",
            weatherRes.data.weather[0].main,
            "H:"+Math.floor(weatherRes.data.main.temp_max - 273.15)+"°F",
            "L:"+Math.floor(weatherRes.data.main.min - 273.15)+"°C"
          ].join(" "))

      setLocation([res.data.city,res.data.principalSubdivision].join(", "));
    }
    if(!location){
      getLocation(setCurrentLocation);
    }
  },[location])

  const tabComponents = {
    "Home":<Home/>,
    "Calendar":<Calendar/>
  }

  return (
    <div className="App">
      <Card 
        border={false}
        title={<PageHeader location={location} weather={localWeather}/>}
        tabs={<Tabs active={activeTab} onClick={setActiveTab} tabs={Object.keys(tabComponents)}/>}
        content={tabComponents[activeTab]}
        wholePage={true}
      />
    </div>
  );
}

export default App;
