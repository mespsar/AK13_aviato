# Basic Imports for the API File
from flask import Flask, request, redirect, url_for, flash, jsonify  # Handling request to model server
import numpy as np                                                   # Handling model data pipeline
import json
from prediction_model import fit_and_predict                         # FaceBook Prophet Model utilization
from datetime import datetime                                        # Date typecasting for the model
import pandas as pd                                                  # IoT Data Management
from fbprophet import Prophet                                        # Model Management
from sklearn.model_selection import train_test_split                 # Model data cleaning tools
import matplotlib.pyplot as plt                                      # Plotting Graphs for Sanity Check

# Hosting the Model on the server & creating a path for the function
app = Flask(__name__)
@app.route('/makecalc', methods=['POST'])
def makecalc():
    
    # Extract the data from the Request made by the Server
    data = request.get_json()
    # Conversion of the JSON to Pandas for the model
    df = pd.DataFrame.from_dict(data,orient='columns')

    # Getting the model prediction
    [day_wise_trend_x_axis, day_wise_trend_y_axis, weekly_x_axis, weekly_y_axis, daily_x_axis, daily_y_axis] = fit_and_predict(df)
    
    # Module for converting the Model output to proper JSON passing 
    day_wise_x = [i.strftime("%Y/%m/%d") for i in list(day_wise_trend_x_axis)]
    weekly_y = [int(i) for i in weekly_y_axis]
    weekly_x = [int(i) for i in weekly_x_axis]

    daily_x = [i.strftime("%H:%M:%S") for i in list(daily_x_axis)]
    daily_y = [int(i) for i in daily_y_axis]

    day_wise_x_json = json.dumps(day_wise_x)
    day_wise_y_json = json.dumps(list(day_wise_trend_y_axis))
    weekly_x_json   = json.dumps(weekly_x)
    weekly_y_json   = json.dumps(weekly_y)
    daily_x_json    = json.dumps(daily_x)
    daily_y_json    = json.dumps(daily_y)

    # Returning the JSON Data
    return jsonify(day_wise_x_json,day_wise_y_json,weekly_x_json,weekly_y_json,daily_x_json,daily_y_json)

if __name__ == '__main__':
    
    app.run(debug=True)