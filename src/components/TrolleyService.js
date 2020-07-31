import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import Widget from './Widget';
import NumberWidget from './NumberWidget';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';
class TrolleyService extends Component
{
    render() {
        return (
            <div className="Main">
                <SideBar/>
                <div className="header" style={{paddingLeft : "100px"}}>
                    <header style={{display: "flex", flexDirection:"row"}}>
                        <img alt="No Data" src={Unknown} width="140" height="80"/>
                        <h1>Airport Authority Of India Dashboard</h1>
                    </header>
                </div>
                <div className="App">


                   <GraphWidgetContainer href="http://localhost:3001/trolley/status"
                        heading="Terminal 1 Trolley Distribution"
                        rowspan={2}
                        colspan={2}
                        chartType="Doughnut"
                        />
                    <GraphWidgetContainer href="http://localhost:3001/trolley/status"
                        heading="Terminal 2 Trolley Distribution"
                        rowspan={2}
                        colspan={2}
                        chartType="Doughnut"
                        />
  </div>
            </div>
        );
    }
}
export default TrolleyService;
