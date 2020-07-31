// The code is a wrapper around the GraphWidget to manage API Calls for data fetch
import React, { Component } from 'react';
import axios from 'axios';                            // Import request module
import GraphWidget from '../components/GraphWidget';  // Import components
import GraphWidget2 from '../components/GraphWidget2';  // Import components

class GraphWidgetContainer extends Component
{
    constructor()
    {
        super();
        // First time when the widget is made these values are set to the following defaults
        this.state =
        {
            loading: false,
            values: []
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
            })
            .catch(error => {
                // Incase of an error stop the loading & console log the error
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
      if(this.props.chartType==="Doughnut")
      {return (
          // All the arguments with the props prefix deal with constants & all with state prefix deal with regular API called dynamic values
          <GraphWidget2 heading={this.props.heading} colspan={this.props.colspan} chartType = {this.props.chartType} rowspan={this.props.rowspan} data={this.state.data} loading={this.state.loading} />
      );}


      else
        return (
            // All the arguments with the props prefix deal with constants & all with state prefix deal with regular API called dynamic values
            <GraphWidget heading={this.props.heading} colspan={this.props.colspan} chartType = {this.props.chartType} rowspan={this.props.rowspan} data={this.state.data} loading={this.state.loading} />
        );
    }
}

// Rules for values incase of wrong data type being sent through the props
GraphWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired,
    chartType : "line"
}

export default GraphWidgetContainer;
