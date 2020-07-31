// The code is a wrapper around the GraphWidget to manage API Calls for data fetch
import React, { Component } from 'react';
import axios from 'axios';                            // Import request module
import NumberWidget from './NumberWidget';
import Widget from './Widget';

import GO from './Logos/GO.svg';
import AI from './Logos/AI.svg';
import IX from './Logos/IX.svg';
import E6 from './Logos/6E.svg';
import AK from './Logos/AK.svg';
import VTI from './Logos/VTI.svg';
import SJ from './Logos/SJ.svg';

class CheckinServiceContainer extends Component 
{
    constructor() 
    {
        super();
        // First time when the widget is made these values are set to the following defaults
        this.state = 
        {
            loading: false,
            air : "",
            src : "BOM",
            des : "",
            num : 0,
            etd : 0,
            cnt : 0,
            gate : 0,

        }
        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Excecuted only when the component loads for the first time on the page
    componentDidMount() 
    {
        // Uses to load the time based binding function
        this.getData().then(_ => {
            this.interval = setInterval(this.getData, 60000);
        });
    }

    // Data Fetcher component
    async getData() 
    {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        // Axios returns a promise and on getting the data executes the "then" reponse
        // Href refers to the link of the data server from where to fetch the data
        return axios.get(this.props.href)
            .then(response => {
                this.setState({ loading: false,
                                air : response.data.air, 
                                des : response.data.des,
                                num : response.data.num,
                                etd : response.data.etd,
                                cnt : response.data.cnt,
                                gate: response.data.gate, 
                            });
            })
            .catch(error => {
                // Incase of an error stop the loading & console log the error
                console.log(error);
                this.setState({ loading: false });
            });
    }
    renderImg(data,num,gate,etd,des)
    {
        if(data==="6E")
            return( 
                <div className="details" style={{display:"flex", flexDirection:"row"}}>
                    <img alt="No Data" src={E6} width="150" height="100"/>
                    <h1>{data} 
                        {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                         Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                         ETD : {etd} &nbsp;&nbsp;
                         Flight Destination : {des}</h1>
                </div>
            );
        else
        if(data==="AK")
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={AK} width="150" height="100"/>
                <h1>{data} 
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );        else
        if(data==="AI")
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={AI} width="150" height="100"/>
                <h1>{data} 
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );        else
        if(data==="IX")
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={IX} width="150" height="100"/>
                <h1>{data} 
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );        else
        if(data==="SJ")
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={SJ} width="150" height="100"/>
                <h1>{data} 
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );        else
        if(data==="VTI")
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={VTI} width="150" height="100"/>
                <h1>{data} 
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );        else
        return( 
            <div className="details" style={{display:"flex", flexDirection:"row"}}>
                <img alt="No Data" src={GO} width="150" height="100"/>
                <h1>{data}
                    {num}  &nbsp;&nbsp;&nbsp;&nbsp;
                     Departure Gate : {gate} &nbsp;&nbsp;&nbsp;&nbsp;
                     ETD : {etd} &nbsp;&nbsp;
                     Flight Destination : {des}</h1>
            </div>
        );
    }

    render() {
        return (
            <div className="App" style={{display:"inline"}}>
                <NumberWidget 
                    heading = {this.props.heading}
                    rowspan = {1}
                    colspan = {1}
                    min = {0}
                    max = {200}
                    value = {this.state.cnt}/>
                <Widget 
                    heading="Status : Active"
                    colspan={3}
                    rowspan={1}>
                    {this.renderImg(this.state.air,this.state.num, this.state.gate,this.state.etd,this.state.des)}
                </Widget>
            </div>
        );
    }
}

// Rules for values incase of wrong data type being sent through the props
CheckinServiceContainer.propTypes = {
    heading: React.PropTypes.string,
    href: React.PropTypes.string.isRequired,
}

export default CheckinServiceContainer;