import React, { useState, useEffect, Component } from "react";
import "./App.css";
import "./Match.css";
import MatchmakerButtons from "./MatchmakerButtons.js";
import Axios from 'axios';

class MatchingCard extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/matchMaking",
    }).then(res => res).then((json) => {
        this.state.data = {name: json.name, age: json.age, profession: json.pastProfession}
        console.log("json: ");
        console.log(json);
    });
  }
  
    render() {return( 
      <div className="card" >

        <p>John Smith</p>
        <p>32</p> 
        <p>lumberjack</p> 
        <img src="./spring.png" width="50px" height="50px"/>
        <MatchmakerButtons/>
      </div>
    )
    }
}

export default MatchingCard;
