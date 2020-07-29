import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import Widget from './Widget';
import NumberWidget from './NumberWidget';
import ListWidgetContainer from './ListWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';
class ParkingService extends Component 
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
                        <NumberWidget heading="Parking Slots Filled"
                            rowspan={1}
                            colspan = {2}
                            min={0}
                            max={800}
                            value={500}
                            progress={true}/>
                        <GraphWidgetContainer href="http://localhost:3001/tickets/progression"
                            heading="Tickets Over Time"
                            colspan={2} 
                            rowspan={2} />
                        <ListWidgetContainer href="http://localhost:3001/stats/top"
                            heading="Top Ticket Answerers"
                            rowspan={3}
                            colspan={2} />
                        <Widget heading="Parking Load" colspan={2}>
                            Normal
                        </Widget>
                    </div>
                </div>
            );
        }
}
export default ParkingService;