import pandas as pd 
import json
import datetime



#df = pd.read_csv('Historic/Test.csv')
#df.to_json('Historic/test_str.json')

f = open('Historic/test_str.json')
data = json.load(f)
df = pd.DataFrame.from_dict(data,orient='columns')
print(df.head())