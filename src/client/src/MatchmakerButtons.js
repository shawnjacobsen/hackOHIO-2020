import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Axios from 'axios';


    class Buttons extends React.Component {

        constructor(props) {
            super(props);
            this.data = {}
        }

        render() {
            return (
                <div>
        <IconButton 
            size="large" 
            aria-label="no"
            onClick={() => {
                Axios({
                  method: "GET",
                  withCredentials: true,
                  url: "http://localhost:5000/matchMaking",
                }).then(res => res).then((res) => {
                    this.data = {name: res.name, age: res.age, profession: res.pastProfession}
                    console.log(res);
                });
                console.log(this.data);
            }}>
                
                <ClearIcon />
        </IconButton>

        <IconButton 
            size="large" 
            aria-label="yes"
            onClick={() => {
                Axios({
                  method: "GET",
                  withCredentials: true,
                  url: "http://localhost:5000/matchMaking",
                }).then((res) => this.data = {name: res.name, age: res.age, profession: res.pastProfession});

                console.log(this.data);
            }}>
                
                <CheckIcon />
        </IconButton>
        </div>
        )
        }
    }
export default Buttons;