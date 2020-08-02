import React, { Component } from 'react';
import Widget from './Widget';  
import { Line, Doughnut } from 'react-chartjs-2';     // All the various graphs to be rendered are managed by this charting library
import '../styles/GraphWidget.css';                   // Constant CSS styling across all the pages


class ForecastGraphWidget extends Component 
{
    constructor(props) 
    {
        super(props);
        // Intial plot values & to be plotted dataset is initially unknown
        this.state = {
            values: {
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                datasets: []
            },
            // Chart Based settings
            chartOptions_line: {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowGridLines: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            },
            chartOptions_pie: {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowGridLines: false,
                legend: {
                    display: false
                }
            }
        }
    }

    // LifeCycle methods to update the graph on new datasets
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data){
            this.generateDatasets(nextProps);
        }
        
    }

    //Convert the data received in props to a format the graphing component likes
    generateDatasets(props) {
        let datasets = [];
        // Pushing the values in the dataset along the X & Y axis
        if(props.dataBit===1)
        {
            var conv_ds = []
            var dataset = {};
            props.data[1]["day_wise_y"].forEach(function(data){
                conv_ds.push(
                    parseInt(data)
                )
            });
            dataset = {
                label : "Day Wise Trend",
                data: conv_ds,
                fill: false,
                borderColor: "#e74c3c",
                pointRadius: 0,
                pointHitRadius: 10
            }

            this.setState({
                values: {
                    datasets: [dataset],
                    labels: props.data[1]["day_wise_x"]
                },
            });
        }
        else
        if(props.dataBit===2)
        {
            var conv_ds = []
            var dataset = {};
            props.data[1]["week_y"].forEach(function(data){
                conv_ds.push(
                    parseInt(data)
                )
            });
            console.log(conv_ds);
            dataset = {
                label : "Week Wise Prediction",
                data: conv_ds,
                fill: false,
                borderColor: "#e74c3c",
                pointRadius: 0,
                pointHitRadius: 10
            }
            this.setState({
                    values: {
                        datasets: [dataset],
                        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                });

        }
        else
        {
            var conv_ds = []
            var dataset = {};
            props.data[1]["daily_y"].forEach(function(data){
                conv_ds.push(
                    parseInt(data)
                )
            });
            dataset = {
                label : "Daily Time Prediction",
                data: conv_ds,
                fill: false,
                borderColor: "#e74c3c",
                pointRadius: 0,
                pointHitRadius: 10
            }

            this.setState({
                    values: {
                        datasets : [dataset],
                        labels: props.data[1]["daily_x"]
                    },
                });
        }
    }

    render() {
        return (
            // Wrap the graphing component in the generic wrapper
            <Widget heading={this.props.heading} 
                    colspan={this.props.colspan} 
                    rowspan={this.props.rowspan} 
                    loading={this.props.loading}>
                <div className="GraphWidget">
                    <Line data={this.state.values} options={this.state.chartOptions_line}/>
                </div>
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
ForecastGraphWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ForecastGraphWidget;