import requests
import json
import pandas as pd


f = open('Historic/test_diffdates(1).json')
data = json.load(f)
url = 'http://127.0.0.1:5000/makecalc'
r = requests.post(url,json=data)
print(r.json())

w = open("Historic/forecast.json","w")
r = json.dumps(r.json())
w.write(r)
