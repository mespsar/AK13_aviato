import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import Widget from './Widget';
import NumberWidget from './NumberWidget';
import ListWidgetContainer from './ListWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';

import GoAir from './Logos/GO.svg';
import AirInd from './Logos/AI.svg';
import AirExp from './Logos/IX.svg';
import Indigo from './Logos/6E.svg';
import AirAsia from './Logos/AK.svg';
import AirVist from './Logos/VTI.svg';

class BaggageService extends Component 
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
                    <ListWidgetContainer href="http://localhost:3001/belt"
                            heading="Belt Status"
                            rowspan={2}
                            colspan={2} />
                </div>
            </div>
        );
    }
}
export default BaggageService;