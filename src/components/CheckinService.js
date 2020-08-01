import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';

import CheckinServiceContainer from './CheckinServiceContainer';
import SideBar from './sidebar';



class CheckinService extends Component 
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
                  <CheckinServiceContainer 
                  href="http://localhost:3001/checkInDetails1"
                  heading="Counter 1 : Passenger Counter"/>
                   <CheckinServiceContainer 
                  href="http://localhost:3001/checkInDetails2"
                  heading="Counter 2 : Passenger Counter"/>
                  <CheckinServiceContainer 
                  href="http://localhost:3001/checkInDetails3"
                  heading="Counter 3 : Passenger Counter"/>
                  <CheckinServiceContainer 
                  href="http://localhost:3001/checkInDetails4"
                  heading="Counter 4 : Passenger Counter"/>
                  <CheckinServiceContainer 
                  href="http://localhost:3001/checkInDetails5"
                  heading="Counter 5 : Passenger Counter"/>                 
                </div>
            </div>
        );
    }
}
export default CheckinService;