import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios';
import "./App.css";
import Navbar from "./NavBar/Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import MatchingCard from "./MatchingCard";
import Resource from "./Resource";

function App() {
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [data, setData] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res));
  };

  const getBestUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const checkLogin = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/matchMaking/check",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }
  
    return( 
      <Router>
        <div className="App"> 
          <Navbar />
          
          <Switch> 
            <Route path="/" exact><Redirect to="/dashboard" /></Route>
            <Route path="/matchMaking" component={MatchingCard}/> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/resources" component={Resource} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router> 
  )

  


}

export default App;
