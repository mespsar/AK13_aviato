// The code is a wrapper around the GraphWidget to manage API Calls for data fetch
import React, { Component } from 'react';
import axios from 'axios';                            // Import request module
import NumberWidget from './NumberWidget';
import Widget from './Widget';
import ListWidget from '../components/ListWidget';
import GraphWidgetContainer from './GraphWidgetContainer';

class ParkingContainer extends Component 
{
    constructor() 
    {
        super();
        // First time when the widget is made these values are set to the following defaults
        this.state = 
        {
            loading: false,
            occ_val : 0,
            values : [],
            pressure : "Low",
            col : "green"
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
                this.setState({ 
                                loading: false,
                                values: response.data,
                                occ_val : (response.data[0].value+
                                        response.data[1].value+
                                        response.data[2].value+
                                        response.data[3].value),
                            });
                var tot = response.data[0].value+ response.data[1].value+ response.data[2].value+ response.data[3].value;
                if(tot > 700)
                    this.setState({pressure:"High", col:"red"});
                else
                if(tot>400)
                    this.setState({pressure:"Medium", col:"orange"});
                else
                    this.setState({pressure:"Low", col:"green"});
            })
            .catch(error => {
                // Incase of an error stop the loading & console log the error
                console.log(error);
                this.setState({ loading: false });
            });
    }
 
    render() {
        return (
            <div className="App">
                        <NumberWidget heading="Parking Slots Filled"
                            rowspan={1}
                            colspan = {2}
                            min={0}
                            max={800}
                            value={this.state.occ_val}
                            progress={true}/>
                        <GraphWidgetContainer href="http://localhost:3001/tickets/progression"
                            heading="Parking Status For The Week"
                            colspan={2} 
                            rowspan={2} 
                            chartType="line"/>
                        <ListWidget 
                            heading="Floor-wise Parking Distribution"
                            colspan={2} 
                            rowspan={2} 
                            listItems={this.state.values} 
                            loading={this.state.loading} />
                        <Widget heading="Parking Load" colspan={2}>
                            <br/>
                            <br/>
                            <h1 style={{color:this.state.col}}>{this.state.pressure}</h1>
                        </Widget>                
            </div>
        );
    }
}

// Rules for values incase of wrong data type being sent through the props
ParkingContainer.propTypes = {
    heading: React.PropTypes.string,
    href: React.PropTypes.string.isRequired,
}

export default ParkingContainer;