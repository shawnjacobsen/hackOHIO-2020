import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import Axios from 'axios';

export default function Register() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {

        Axios({
            method: "POST",
            data: {
              capGrowth: data.capGrowth,
              startBus: data.startBus,
              finCol: data.finCol,
              livingExpense: data.livingExpense,
            },
            withCredentials: true,
            url: "http://localhost:5000/register",
          }).then((res) => console.log(res));
          console.log(data);
    }

    return(
        <div>
        <h1>What are you most interested in doing on Stonks.io?</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="capGrowth" id="capGrowth" type="checkbox" ref={
                register()
                }/>
            <label for="capGrowth"> Capital Growth</label>
            <div></div>
           
            <input name="startBus"  type="checkbox" id="startBus" ref={
                register()
            } />
            <label for="startBus">Starting a Business</label>
            <div></div>

            <input name="finCol" type="checkbox" id="finCol" ref={
                register()
            }/>
            <label for="finCol">Financing College</label>
            <div></div>
            
            <input name="livingExpense" type="checkbox" id="livingExpense" ref={
                register()
            } />
            <label for="livingExpense">Budget Living Expenses</label>
            <div></div>
        </form>
        </div>
    );
}