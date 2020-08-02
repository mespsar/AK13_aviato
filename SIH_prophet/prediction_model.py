# Basic Imports 
import pandas as pd                                    # IoT Data Management                                   
from fbprophet import Prophet                          # FaceBook Prophet Model 
from sklearn.model_selection import train_test_split   # Model data cleaning tools
import matplotlib.pyplot as plt                        # Plotting Graphs for Sanity Check                   
plt.switch_backend('Agg')                              # Disabling the interactive nature of the plot generation


# Main module for prediction
def fit_and_predict(test_df):

    # Importing & data pre-processing of the Data generated by the IoT Devices
    ##################################################################################################################
    df_1 = pd.read_csv('Historic/df_parking_1_to_3(Aug).csv')
    df_2 = pd.read_csv("Historic/df_parking_19_to_25(July).csv")
    df_3 = pd.read_csv("Historic/df_parking_25_to_31(July).csv")
    df_4 = pd.read_csv('Historic/df_parking_4_to_5(Aug).csv')
    df_5 = pd.read_csv('Historic/df_parking_6_to_12(Aug).csv')
    df_6 = pd.read_csv('Historic/df_parking_13_to_19(Aug).csv')

    # Setting up all data in df_1
    df_1 = df_1.append(df_2,ignore_index=True)
    df_1 = df_1.append(df_3,ignore_index=True)
    df_1 = df_1.append(df_4,ignore_index=True)
    df_1 = df_1.append(df_5,ignore_index=True)
    df_1 = df_1.append(df_6,ignore_index=True)

    # Date extraction for day wise sort
    df_1["Date"] = df_1["Entry Time"].map(lambda x : x.split()[0])

    # Bucketing parkings into various hours from 0 to 23 (24 Hour clock format)
    df_1["Hour Bucket"]=df_1["Entry Time"].map(lambda x : (x.split()[1]).split(":")[0])

    # Properly sort the values
    df_1 = df_1.sort_values(by=['Entry Time','Hour Bucket'])

    # Getting hour based parking counts
    parking_num_hour = [] # format Date, Hour, Number of parkings
    for f,coll in df_1.groupby(["Date","Hour Bucket"]):
        parking_num_hour.append([coll["Date"].iloc[0],int(coll["Hour Bucket"].iloc[0]),len(coll)])

    # Once the list is created making a dataframe
    dfx = pd.DataFrame(parking_num_hour)
    dfx['Date-time'] = dfx[0].astype(str) + " " + dfx[1].astype(str) + ":00:00"  # Prophet needs input in date-time format
    dfx['Date-time'] = pd.to_datetime(dfx['Date-time'])

    # Parking count placement in the dataframe
    dfx['No. of parkings'] = dfx[2]
    dfx = dfx.drop([0, 1, 2], axis = 1)
    dfx = dfx.set_index('Date-time')

    # Splitting the data into train test split to avoid overfit
    train, test = train_test_split(dfx, test_size=0.1)
    X = train.reset_index().rename(columns = {'Date-time':'ds','No. of parkings':'y'})
    ##################################################################################################################
    
    # Fitting the model
    ##################################################################################################################
    model = Prophet()
    model.fit(X)
    ##################################################################################################################

    # Prediction on test data
    ##################################################################################################################
    #test_pr = model.predict(df = test.reset_index().rename(columns={'Date-time':'ds'}))
    test_pr = model.predict(df = test_df.rename(columns={'Date-time':'ds'}))
    ##################################################################################################################

    # Proper output smoothing for trend, day-wise & time wise forecast
    ##################################################################################################################
    fig = model.plot_components(test_pr)
    ax = plt.gcf().get_axes()

    line_0 = ax[0].lines[0]
    line_1 = ax[1].lines[0]
    line_2 = ax[2].lines[0]

    day_wise_trend_x_axis = line_0.get_xdata()
    day_wise_trend_y_axis = line_0.get_ydata()
        
    weekly_x_axis = line_1.get_xdata()
    weekly_y_axis = line_1.get_ydata()   
    
    daily_x_axis = line_2.get_xdata()
    daily_y_axis = line_2.get_ydata()
    ##################################################################################################################

    print("Last Step")
    # Final output returned in appropriate format
    return day_wise_trend_x_axis, day_wise_trend_y_axis, weekly_x_axis, weekly_y_axis, daily_x_axis, daily_y_axis