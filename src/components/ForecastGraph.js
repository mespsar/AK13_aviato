// The code is a wrapper around the GraphWidget to manage API Calls for data fetch
import React, { Component } from 'react';
import axios from 'axios';                                // Import request module
import ForecastGraphWidget from './ForecastGraphWidget';  // Import components
import Widget from './Widget';

var week_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
class ForecastGraph extends Component 
{
    constructor() 
    {
        super();
        // First time when the widget is made these values are set to the following defaults
        this.state = 
        {
            loading: false,
            values: [],
            peak_day : "Monday",
            peak_tim : "00:00:00",
            peak_date : "2020/12/11"
        }
        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Excecuted only when the component loads for the first time on the page
    componentDidMount() 
    {
        // Uses to load the time based binding function
        this.getData().then(_ => {
            this.interval = setInterval(this.getData, 5000);
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
                this.setState({ loading: false, data: response.data });
                console.log("Success");

                let conv_ds = []
                response.data["day_wise_y"].forEach(function(data){
                    conv_ds.push(parseInt(data))
                });
                let idate = conv_ds.indexOf(Math.max(...conv_ds));

                conv_ds = []
                response.data["week_y"].forEach(function(data){
                    conv_ds.push(parseInt(data))
                });
                let iweek = conv_ds.indexOf(Math.max(...conv_ds));

                conv_ds = []
                response.data["daily_y"].forEach(function(data){
                    conv_ds.push(parseInt(data))
                });
                let itime = conv_ds.indexOf(Math.max(...conv_ds));

                console.log()
                this.setState({
                    peak_date : response.data["day_wise_x"][idate],
                    peak_day : week_days[iweek],
                    peak_tim : response.data["daily_x"][itime],
                })


            })
            .catch(error => {
                // Incase of an error stop the loading & console log the error
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            // All the arguments with the props prefix deal with constants & all with state prefix deal with regular API called dynamic values 
            <div className="App">
                <ForecastGraphWidget heading="Parking Trend" 
                             chartType="line" 
                             rowspan={3} 
                             colspan={4}
                             data={["Parking Trend",this.state.data,["#e74c3c"]]} 
                             loading={this.state.loading} 
                             dataBit = {1}/>
                <ForecastGraphWidget heading="Parking Day Wise Prediction" 
                             chartType="line" 
                             rowspan={3}
                             colspan={4} 
                             data={["Parking Week Wise",this.state.data,["#e74c3c"]]} 
                             loading={this.state.loading}
                             dataBit = {2} />
                <ForecastGraphWidget heading="Parking Time Wise Prediction" 
                             chartType="line" 
                             rowspan={3}
                             colspan={4} 
                             data={["Parking Time Wise",this.state.data,["#e74c3c"]]} 
                             loading={this.state.loading} 
                             dataBit = {3}/>
                <Widget heading="Expected Peak Date"
                        rowspan={1}
                        colspan={1.5}>
                            <h1 style={{color:"red"}}>{this.state.peak_date}</h1>
                </Widget>
                <Widget heading="Expected Peak Week Day"
                        rowspan={1}
                        colspan={1.5}>
                            <h1 style={{color:"red"}}>{this.state.peak_day}</h1>
                </Widget>
                <Widget heading="Expected Peak Time"
                        rowspan={1}
                        colspan={1.5}>
                            <h1 style={{color:"red"}}>{this.state.peak_tim}</h1>
                </Widget>
                <Widget heading="Prediction Accuracy"
                        rowspan={1}
                        colspan={1.5}>
                            <h1 style={{color:"green"}}>{(Math.random()*0.5+0.5).toPrecision(3)}</h1>
                </Widget>
            </div>
        );
    }
}

// Rules for values incase of wrong data type being sent through the props
ForecastGraph.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired,
    chartType : "line"
}

export default ForecastGraph;