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
                        <img alt="No Data" src={Unknown} width="150" height="100"/>
                        <h1>Airport Authority Of India Dashboard</h1>
                    </header>
                </div>
                <div className="App">
                    <NumberWidget heading="Terminal 1 Trolley Utilization"
                        rowspan={1}
                        colspan={2}
                        min={0}
                        max={3000}
                        value={428}
                        progress={true}/>
                    <NumberWidget heading="Terminal 2 Trolley Utilization"
                        rowspan={1}
                        colspan={2}
                        min={0}
                        max={3000}
                        value={637}
                        progress={true}/>
                    
                    <GraphWidgetContainer href="http://localhost:3001/tickets/progression"
                        heading="Terminal 1 Trolley Distribution"
                        rowspan={2}
                        colspan={2}
                        chartType="pie"
                        /> 
                    <GraphWidgetContainer href="http://localhost:3001/tickets/progression"
                        heading="Terminal 2 Trolley Distribution"
                        rowspan={2}
                        colspan={2}
                        chartType="pie"
                        /> 
                    <Widget heading = "Load Status"
                        rowspan={2}
                        colspan={2}>
                        Balanced
                    </Widget>
                    <Widget heading = "Load Status"
                        rowspan={2}
                        colspan={2}>
                        Imbalance
                    </Widget>
                </div>
            </div>
        );
    }
}
export default TrolleyService;