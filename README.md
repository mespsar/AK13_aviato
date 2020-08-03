# AAI_DB
1.There is a huge increase in the number of people using planes as their mode of transport therefore the Airport Operators must be prepared to satisfy their ever increasing demand.

2.Our goal is to develop a smart architecture that gives the terminal manager a reasonably correct estimate of the Airport services under utilisation and also predict patterns in the flyer’s demand of these services.

3.The data collected is given to a neural network for trend prediction.

4.Interactive web page components to give the Terminal Manager the best suggestions for efficient use of airport resources.

# Solution Details
1.Parking Utilisation :  Based on the data collected by the IoT nodes at various time-steps,  the webpage will give a graphical intuition to the terminal manager to see the live status of filled slots & at the same time to see the demand of parking throughout the day.

2.Trolley Usage : Giving a Piechart representation of the trolley distribution at any terminal i.e. no. of trolleys being used, at pickup point & drop point. This will help the terminal manager to use the resources to appropriately balance the trolley positioning in case of an imbalance situation.

3.Check In Counter : Gives the visual status of the check in load at the counter which allows the terminal manager to control the speed so that there is load distribution between security check & boarding gates.

4.Baggage Counter : Shows the live status of baggage belt & upcoming flights. This will allow the terminal manager to know which belt gets free first  & thereby allot proper flights to correct belts for good synchronisation
Forecast : An LSTM & Bayesian model is trained on the artificial parking data & this will aid the manager to know the trend of parking across days, peak load on which peak day & peak load at which time. 

# Forecast Model 
1.The model being utilised for the forecast of parking data is Facebook’s Prophet model whose salient features incorporated into our solution is as follows :
The model is based on additive nature & made up of 3 main components :
    
    1.Linear trend function whose sole purpose is to give us an increasing or decreasing sloped line for giving a brief idea about the demand.
    2.Periodic Component helps us to fit data that shows repetition at regular intervals of time.
    3.Seasonality Component allows us to fit cases of un expected spikes in the data. These spikes are incorporated in the form of holidays while training the model. (Since frequency of fliers increases during holidays therefore so is the parking utilisation)
    4.Noise component to handle outliers.

2.The IoT data collected is placed in CSV format and read by the Model API for training. The data is cleaned with the help of Pandas to solve the following issues:
  
    1.Null value cleaning
    2.Negative values removal
    3.Unexpected count outlier i.e. if the no. of parkings reported is more than the number of slots.

3.The model is based on Bayesian  framework along with inclusion of Fourier time series & Change point selections.

below are some sample snips from our dashboard



