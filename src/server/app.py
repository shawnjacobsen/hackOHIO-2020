from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle
import joblib
import random
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

def findTopThree(probabilities,dataArray):
    resultArray = []
    for i in range(0,3):
        max = [0,0]
        for j in range(0, len(probabilities)):
            if max[0] < probabilities[j] and j not in resultArray:
                max = [probabilities[j],j]
        resultArray.append(max[1])
    return resultArray

def getRandAmount(dataArray,topThreeArray,num):
    resultArray = []
    while len(resultArray) < num:
        rand1 = random.randint(0,2)
        rand2 = random.randint(0,2)
        print(rand1)
        print(rand2)
        if dataArray[rand1 + 1 ][topThreeArray[rand2]] not in resultArray:
            resultArray.append(dataArray[rand1 + 1 ][topThreeArray[rand2]])
    return resultArray

# Advise Generation
adviseDataRaw = open('the_prophecy.csv', 'r')
adviseDataRaw = csv.reader(adviseDataRaw, delimiter=',')
adviseData = []
for row in adviseDataRaw:
    adviseData.append(row)

# Importing model
model = joblib.load('beep_boop_stonks.joblib')

# Flask app and Routes
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/api/advice", methods=['POST'])

def predict():
        
    input_vars = [[float(request.json[df_cols[0]]), int(request.json[df_cols[1]]), int(request.json[df_cols[2]]), int(request.json[df_cols[3]]), float(request.json[df_cols[4]]), int(request.json[df_cols[5]]), FIPtoRPP(str(request.json[df_cols[6]]))]]

    params_npArray = np.array(input_vars)

    # Get the model's prediction
    prediction_0 = model.predict_proba(params_npArray)[0,0]
    prediction_1 = model.predict_proba(params_npArray)[0,1]
    prediction_2 = model.predict_proba(params_npArray)[0,2]
    prediction_3 = model.predict_proba(params_npArray)[0,3]
    prediction_4 = model.predict_proba(params_npArray)[0,4]

    predictionArray = [prediction_0,prediction_1,prediction_2,prediction_3,prediction_4]
    topThree = findTopThree(predictionArray, adviseData)

    finalAdvise = getRandAmount(adviseData, topThree, 4)
    
    ret = (
        f'{{'
        f'"{return_cols[0]}": "{str(prediction_0)}",'
        f'"{return_cols[1]}": "{str(prediction_1)}",'
        f'"{return_cols[2]}": "{str(prediction_2)}",'
        f'"{return_cols[3]}": "{str(prediction_3)}",'
        f'"{return_cols[4]}": "{str(prediction_4)}",'
        f'"advise":['
        f'"{finalAdvise[0]}", "{finalAdvise[1]}", "{finalAdvise[2]}", "{finalAdvise[3]}"'
        f']}}'
    )
    
    return ret

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)
