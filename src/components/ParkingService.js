import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import SideBar from './sidebar';
import ParkingContainer from './ParkingContainer';


class ParkingService extends Component 
{
    state={
        curTime : new Date().toLocaleString(),
      }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }
        render() {
            return (
                <div className="Main">
                    <SideBar/>
                    <div className="header" style={{paddingLeft : "100px"}}>
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={Unknown} width="150" height="100"/>
                            <h1>Airport Authority Of India Dashboard</h1>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <h1>{this.state.curTime}</h1>
                        </header>
                    </div>
                    <div className="Body">
                        <ParkingContainer 
                            href="http://localhost:3001/stats/top"
                            heading="Parking Information"/>
                    </div>
                </div>
            );
        }
}
export default ParkingService;