import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import ListWidgetContainer from './ListWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';
class WelcomeDashboard extends Component 
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
                </div>
            );
        }
}
export default WelcomeDashboard;