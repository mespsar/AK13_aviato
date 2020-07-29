import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


import BaggageService from './BaggageService';
import CheckinService from './CheckinService';
import WelcomeDashboard from './WelcomeDashboard';
import ParkingService from './ParkingService';
import ForecastPark from './ForecastPark';
import TrolleyService from './TrolleyService';


//Class based components
class App extends Component {
    render()
    {
        return(
               <Router>
                   <Switch>
                       <Route exact path="/">
                           <WelcomeDashboard/>
                       </Route>
                       <Route exact path="/Parking">
                           <ParkingService/>
                       </Route>
                       <Route exact path="/Trolley">
                           <TrolleyService/>
                       </Route>
                       <Route exact path="/Baggage">
                           <BaggageService/>
                       </Route>
                       <Route exact path="/CheckIn">
                           <CheckinService/>
                       </Route>
                       <Route exact path="/Forecast">
                           <ForecastPark/>
                       </Route>
                    </Switch>
                </Router>
            );
    }
}
export default App;