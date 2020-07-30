import React, { Component } from 'react';
import '../styles/App.css';

import Unknown from './Unknown-2.svg';
import Widget from './Widget';
import NumberWidget from './NumberWidget';
import ListWidgetContainer from './ListWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer';
import SideBar from './sidebar';

import GoAir from './Logos/goair.svg';
import AirInd from './Logos/AirInd.svg';
import AirExp from './Logos/AirIndExp.svg';
import Indigo from './Logos/Indigo.svg';
import AirAsia from './Logos/AirAsia.svg';
import AirVist from './Logos/airvistara.svg';

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
                    <NumberWidget heading="Counter 1"
                        rowspan={1}
                        colspan={1}
                        min={0}
                        max={3000}
                        value={428}
                        progress={true}/>
                    <Widget colspan={3} heading="Status : Active">
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={GoAir} width="150" height="100"/>
                            <h1>GOW 176</h1>
                        </header>
                            <h1> BOM TO DEL ETD : 12:56</h1>
                    </Widget>

 
                    <NumberWidget heading="Counter 2"
                        rowspan={1}
                        colspan={1}
                        min={0}
                        max={3000}
                        value={637}
                        progress={true}/>
                    <Widget colspan={3} heading="Status : Inactive">
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={Indigo} width="150" height="100"/>
                            <h1>6E 248</h1>
                        </header>
                            <h1> BOM TO TRV ETD : 10:56</h1>
                    </Widget>


                    <NumberWidget heading="Counter 3"
                        rowspan={1}
                        colspan={1}
                        min={0}
                        max={3000}
                        value={914}
                        progress={true}/>
                    <Widget colspan={3} heading="Status : Active">
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={AirInd} width="150" height="100"/>
                            <h1>AI 295</h1>
                        </header>
                            <h1> BOM TO HYD ETD : 13:30</h1>
                    </Widget>


                    <NumberWidget heading="Counter 4"
                        rowspan={1}
                        colspan={1}
                        min={0}
                        max={3000}
                        value={889}
                        progress={true}/>
                    <Widget colspan={3} heading="Status : Active">
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={AirVist} width="150" height="100"/>
                            <h1>VTI 104</h1>
                        </header>
                            <h1> BOM TO DEL ETD : 13:00</h1>
                    </Widget>

        
                    <NumberWidget heading="Counter 5"
                        rowspan={1}
                        colspan={1}
                        min={0}
                        max={3000}
                        value={889}
                        progress={true}/>
                    <Widget colspan={3} heading="Status : Inactive">
                        <header style={{display: "flex", flexDirection:"row"}}>
                            <img alt="No Data" src={AirExp} width="150" height="100"/>
                            <h1>AEXP 2234</h1>
                        </header>
                            <h1> BOM TO COK ETD : 9:34</h1>
                    </Widget>                        
                </div>
            </div>
        );
    }
}
export default BaggageService;