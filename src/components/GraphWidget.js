import React, { Component } from 'react';
import Widget from '../components/Widget';  
import { Line, Doughnut } from 'react-chartjs-2';     // All the various graphs to be rendered are managed by this charting library
import '../styles/GraphWidget.css';         // Constant CSS styling across all the pages

class GraphWidget extends Component 
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
                            beginAtZero: true,
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
                    display: true
                }
            },
            chartOptions_pie: {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowGridLines: false,
                legend: {
                    display: true
                }
            }
        }
    }

    renderChart(data, chartType)
    {
        if(chartType === "pie")
        {
            console.log("Pie")
            return (
                <Doughnut data={data} options={this.state.chartOptions_pie}/>
            );
        }
        else
        {
            console.log(chartType)
            return(
                <Line data={data} options={this.state.chartOptions_line}/>
            );
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
        props.data.forEach(function (data) {
            datasets.push({
            label: data.label,
            data: data.data,
            fill: false,
            borderColor: data.color,
            pointRadius: 0,
            pointHitRadius: 10
            });
          }, this);

        //Let the React wrapper for Chart.js update the view
        this.setState({
            values: {
                datasets
            }
        });
    }

    render() {
        return (
            // Wrap the graphing component in the generic wrapper
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                <div className="GraphWidget">
                    {this.renderChart(this.state.values,this.props.chartType)}
                </div>
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
GraphWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default GraphWidget;