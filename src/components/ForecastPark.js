import React, { Component, useState } from 'react';
import '../styles/App.css';
import 'react-day-picker/lib/style.css';


import Unknown from './Unknown-2.svg';
import ForecastGraph from './ForecastGraph';
import SideBar from './sidebar';


class ForecastPark extends Component 
{
    render() {
        return (
            <div className="Main">
                <SideBar/>
                <div className="header" style={{paddingLeft : "100px"}}>
                    <header style={{display: "flex", flexDirection:"row"}}>
                        <img alt="No Data" src={Unknown} width="150" height="100"/>
                        <h1>Airport Authority Of India Dashboard</h1>
                    </header>
                </div>
                <div className="Body">
                    <ForecastGraph href="http://localhost:3001/forecast"/>
                </div>
            </div>
        );
    }
}
export default ForecastPark;