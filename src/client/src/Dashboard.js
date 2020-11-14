import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './happypeople.jpeg'

function Dashboard() {
    return( 
        <div className= "pictrys">
            <img src="happypeople.jpeg" background= "happypeople.jpeg" ></img>
        </div>
    )
}

export default Dashboard;
