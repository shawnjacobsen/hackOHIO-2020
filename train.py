# Load EDA Pkgs
import pandas as pd
import numpy as np

# Load Data Viz Pkgs
import matplotlib.pyplot as plt
import seaborn as sns

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
df = pd.read_csv("data/cleaned_data_test.csv")
df_array = df.values

df_cols = ['HHINC', 'FINC_FIN', 'HPRES_MORT', 'HDIV_YN', 'FOWNU18', 'HINT_YN', 'RPP', 'relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']
X = df_array[:,0:7]
y = df_array[:,7:12]
#X = df[['HHINC', 'FINC_FIN', 'HPRES_MORT', 'HDIV_YN', 'FOWNU18', 'HINT_YN', 'RPP']]
#y = df[['relocate', 'get_bank_account', 'get_credit_card', 'fin_diversification', 'fin_consolidation']]

# Split Data 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(X_train.shape)

### Problem Transform
import skmultilearn

binary_rel_clf = BinaryRelevance(MultinomialNB())
binary_rel_clf.fit(X_train,y_train)

# Predictions
br_prediction = binary_rel_clf.predict(X_test)
print(br_prediction)

# Accuracy
print("Accuracy Score: " + str(accuracy_score(y_test,br_prediction) * 100) + " %")

# save trained model
import joblib
binary_rel_clf_file = open("data/beep_boop_stonks.pkl","wb")
joblib.dump(binary_rel_clf,binary_rel_clf_file)
binary_rel_clf_file.close()

