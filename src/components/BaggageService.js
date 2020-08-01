import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import Widget from './Widget';
import NumberWidget from './NumberWidget';
import ListWidgetContainer from './ListWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';

import GO from './Logos/GO.svg';
import AI from './Logos/AI.svg';
import IX from './Logos/IX.svg';
import E6 from './Logos/6E.svg';
import AK from './Logos/AK.svg';
import VTI from './Logos/VTI.svg';
import SJ from './Logos/SJ.svg';

class BaggageService extends Component 
{
    state={
        curTime : new Date().toLocaleString().slice(0,17),
      }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString().slice(0,17)
          })
        }, 9000)
      }
    renderAirlines()
    {
        var airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
        var src = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
        var ar = airlines[Math.floor(Math.random() * airlines.length)]
        var flt = ar+" "+Math.floor(Math.random() * 999)
        var src = src[Math.floor(Math.random() * src.length)]
        if(ar==="GO")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={GO} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );
        }
        else
        if(ar==="AI")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={AI} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );           
        }
        else
        if(ar==="IX")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={IX} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );           
        }
        else
        if(ar==="VTI")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={VTI} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );            
        }
        else
        if(ar==="6E")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={E6} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );            
        }
        else
        if(ar==="AK")
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={AK} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );            
        }
        else
        {
            return(
                <div className="Render" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <img alt="No Data" src={SJ} width="150" height="100"/>
                    {flt+" SRC:"+src}
                </div>
            );   
        }
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
                
                <div className="App">
                    <ListWidgetContainer href="http://localhost:3001/belt"
                            heading="Belt Status"
                            rowspan={2}
                            colspan={3} />
                    <Widget 
                            heading="Flights"
                            rowspan={2}
                            colspan={1}>
                            <br/>
                            {this.renderAirlines()}<br/>
                            {this.renderAirlines()}<br/>
                            {this.renderAirlines()}<br/>
                            {this.renderAirlines()}<br/>
                    </Widget>
                    <Widget
                            heading="Upcoming Flights"
                            rowspan={1}
                            colspan={4}>
                            <div className="Arrivals" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                {this.renderAirlines()}
                                {this.renderAirlines()}
                                {this.renderAirlines()}
                                {this.renderAirlines()}
                            </div>
                    </Widget>
                    
                </div>
            </div>
        );
    }
}
export default BaggageService;