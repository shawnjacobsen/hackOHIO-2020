import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";
import Navbar from "./NavBar/Navbar";

import FormsAndInputs from "./NavBar/Form";


function App() {
  
    return( 
      <Router>
        <div className="App"> 
          <Navbar /> 
          
          
          <Switch> 
            <Route path="/" exact><Redirect to="/dashboard" /></Route>
            <Route path="/dashboard" component={FormsAndInputs} />

          </Switch>
        </div>
      </Router> 
  )

  


}

export default App;
