# Load EDA Pkgs
import pandas as pd
import numpy as np

# Load Data Viz Pkgs
import matplotlib.pyplot as plt
import seaborn as sns
import pickle

# ML Pkgs
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.naive_bayes import GaussianNB,MultinomialNB
from sklearn.metrics import accuracy_score,hamming_loss,classification_report

# Multi Label Pkgs
from skmultilearn.problem_transform import BinaryRelevance
from skmultilearn.problem_transform import ClassifierChain
from skmultilearn.problem_transform import LabelPowerset
from skmultilearn.adapt import MLkNN

### Split Dataset into Train and Text
from sklearn.model_selection import train_test_split

# import data
df = pd.read_csv("ML_fulldata_formatted.csv")
df_array = df.values

df_cols = ['NHHINC', 'HFIN_YN', 'HPRES_MORT', 'HDIV_YN', 'NHUNDER18', 'HINT_YN', 'NRPP', 'relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']
X = df_array[:,0:7]
y = df_array[:,7:12]
#X = df[['HHINC', 'FINC_FIN', 'HPRES_MORT', 'HDIV_YN', 'FOWNU18', 'HINT_YN', 'RPP']]
#y = df[['relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']]

# Split Data 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.0001, random_state=42)
print(X_train.shape)

### Problem Transform
import skmultilearn

binary_rel_clf = BinaryRelevance(MultinomialNB())
binary_rel_clf.fit(X_train,y_train)

# Predictions
X_test_n1 = np.array([X_test[0]]) # sample size of one

print("X_test -----------------")
print(X_test)
print("y_test -----------------")
print(y_test)
print("------------------------")
br_prediction = binary_rel_clf.predict(X_test)
print(br_prediction)
print("Pred Prob ------------------------")
br_prediction_prob = binary_rel_clf.predict_proba(X_test)
print(br_prediction_prob)

# Accuracy
print("Accuracy Score: " + str(accuracy_score(y_test,br_prediction) * 100) + " %")

# save trained model
import joblib

# binary_rel_clf_file = open("beep_boop_stonks.pkl","wb")
joblib.dump(binary_rel_clf,'beep_boop_stonks.joblib')

# load trained model
model = joblib.load('beep_boop_stonks.joblib')
