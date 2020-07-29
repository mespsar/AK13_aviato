import React, { Component } from 'react';
import '../styles/Widget.css'; // done to constraint the css styling only to the specific widget component

// The component is helpful when the components is rebuilt with new data then during the delay use some loading animation
import Loading from './Loading';

//Import styling

class Widget extends Component {
    constructor(props) {
        super(props);

        // Create inline styles to make grid elements span multiple rows/columns
        this.spanStyles = {};

        // Adding the 2 properties to span grid & row, this will update the spanStyles
        if (props.colspan !== 1) {
            this.spanStyles.gridColumn
            = `span ${props.colspan}`;
          }
          if (props.rowspan !== 1) {
            this.spanStyles.gridRow
            = `span ${props.rowspan}`;
          }
    }

    // Adding props to the widget component
    render() {
        return (
            <div style={this.spanStyles} className="Widget">
                <div className="header">
                    <h2>{this.props.heading}</h2>
                    {this.props.loading ? <Loading />:""}
                </div>
                <div className="content">
                    {this.props.children}
                </div>     
            </div>
        );
    }
}

// Default Settings to provide for a widget block incase nothing is provided
Widget.defaultProps = {
    heading: "Unnamed Widget",
    colspan: 1,
    rowspan: 1
  }


// Hints to be passed for the dataType of prop in order to avoid errors
Widget.propTypes = {
    heading: React.PropTypes.string,
  }



export default Widget;