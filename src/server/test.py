from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle
import joblib
import pandas as pd
import numpy as np
import csv
import random


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
topThree = findTopThree([1,1,0,0,1],adviseData)
print(topThree)
print(getRandAmount(adviseData,topThree,3))
