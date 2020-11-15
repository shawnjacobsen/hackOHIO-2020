from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle
import joblib
import pandas as pd
import numpy as np
import csv

# comment
# Get headers for payload
df_cols = ['NHHINC', 'HFIN_YN', 'HPRES_MORT', 'HDIV_YN', 'NHUNDER18', 'HINT_YN', 'NRPP']
return_cols = ['relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']

N_RPP = 118.1

def FIPtoRPP(FIP):
    datafile = open('RPP_key.csv', 'r')
    datareader = csv.reader(datafile, delimiter=',')
    data = []
    for row in datareader:
        data.append(row) 
    npArray = np.array(data)
    rows, cols = np.where(npArray == FIP)
    val = (float(data[rows[0]][1])) / N_RPP
    return val

print(FIPtoRPP('23'))

# Importing model
model = joblib.load('beep_boop_stonks.joblib')

# Flask app and Routes
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/api/advice", methods=['GET'])

def predict():
    input_vars = [[request.json[df_cols[0]], request.json[df_cols[1]], request.json[df_cols[2]], request.json[df_cols[3]], request.json[df_cols[4]], request.json[df_cols[5]], FIPtoRPP(request.json[df_cols[6]])]]

    params_npArray = np.array(input_vars)

    # Get the model's prediction
    prediction_0 = model.predict_proba(params_npArray)[0,0]
    prediction_1 = model.predict_proba(params_npArray)[0,1]
    prediction_2 = model.predict_proba(params_npArray)[0,2]
    prediction_3 = model.predict_proba(params_npArray)[0,3]
    prediction_4 = model.predict_proba(params_npArray)[0,4]

    # prediction = (prediction_proba[0])[1]
    
    ret = (
        f'{{'
        f'"{return_cols[0]}": "{str(prediction_0)}",'
        f'"{return_cols[1]}": "{str(prediction_1)}",'
        f'"{return_cols[2]}": "{str(prediction_2)}",'
        f'"{return_cols[3]}": "{str(prediction_3)}",'
        f'"{return_cols[4]}": "{str(prediction_4)}"'
        f'}}'
    )
    
    return ret

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)
