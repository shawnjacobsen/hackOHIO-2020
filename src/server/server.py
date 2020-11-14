from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle
import pandas as pd

# Get headers for payload
df_cols = ['HHINC', 'FINC_FIN', 'HPRES_MORT', 'HDIV_YN', 'FOWNU18', 'HINT_YN', 'RPP']
return_cols = ['relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']

# Importing model
pickle_in = open("beep_boop_stonks.pkl","rb")
model = pickle.load(pickle_in)

# Flask app and Routes
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/api/advice", methods=['GET'])

def predict():
    pL_HHINC = request.json['HHINC']
    pL_FINC_FIN = request.json['FINC_FIN']
    pL_HPRES_MORT = request.json['HPRES_MORT']
    pL_HDIV_YN = request.json['HDIV_YN']
    pL_FOWNU18 = request.json['FOWNU18']
    pL_HINT_YN = request.json['HINT_YN']
    pL_RPP = request.json['RPP']
    
    input_vars = [df_cols, [pL_HHINC, pL_FINC_FIN, pL_HPRES_MORT, pL_HDIV_YN, pL_FOWNU18, pL_HINT_YN, pL_RPP]]
    print(input_vars)

    # Get the model's prediction
    prediction_proba = model.predict_proba(input_vars)
    print("prediction_proba:")
    print(prediction_proba)
    prediction = (prediction_proba[0])[1]
    
    ret = '{"prediction":' + str(float(prediction)) + '}'
    
    return ret

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)
