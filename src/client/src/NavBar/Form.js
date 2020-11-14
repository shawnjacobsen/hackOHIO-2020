import React, { Component } from 'react' 
import {useForm} from "react-hook-form";
import { useState, useEffect } from 'react';

function FormsAndInputs(){ 
    const { register, handleSubmit } = useForm(); 
    const onSubmit = (values) => console.log(values);

const [capG,setcapG] = useState(0);
const [bus,setbus] = useState(0); 
const [finC,setfinC] = useState(0); 
const [lE,setlE] = useState(0);
const [bank,setbank] = useState(0); 
const [kids,setkids] = useState(0); 
const [rev,setrev] = useState(0); 
const [exp,setexp] = useState(0);   
const [loc,setloc] = useState("homeless"); 
const [stonk,setstonk] = useState(0);  

useEffect (()=> { 
   document.title = `Sup ${rev}`;
        });

    return( 
        <div className="FormsAndInputs"> 
         <form onSubmit={handleSubmit(onSubmit)}> 
          
          
                <h1>What are you most interested in doing on Stonks.io?</h1>
                <label for="capGrowth"> 
                        <input  name="capGrowth" id="capGrowth" type="checkbox" ref={
                             register()
                             } onInput = {()=>setcapG(capG ==1 ? 0:1)}/>  
                       Capital Growth </label>
                    <div></div> 
                   
                    <label for="startBus">
                     <input name="startBus"  type="checkbox" id="startBus" ref={
                  
                  register()
                     } onInput = {()=>setbus(bus ==1 ? 0:1)} />
                    Starting a Business</label>
                    <div></div>
                    <label for="finCol">
                    <input name="finCol" type="checkbox" id="finCol" ref={
                register()
                 } onInput = {()=>setfinC(finC ==1 ? 0:1)}/>
                Financing College</label>
             <div></div>
             <label for="livingExpense">
                <input name="livingExpense" type="checkbox" id="livingExpense" ref={
                register()
                } onInput = {()=>setlE(lE ==1 ? 0:1)}/>
                Budget Living Expenses</label>
                    <div></div>
          
          
                <h1>Information</h1>
          
      
                <label> 
                    Income           
                    <input type="number" name="income" ref={register} onChange={event=>setrev(event.target.value)}/>
                    </label> 
                <label> 
                    Expenses 
                    <input type="number" name="expense" ref={register} onChange={event=>setexp(event.target.value)}/>
                </label> 
                <label> 
                    Location 
                    <input type="text" name="location" ref={register} onChange={event=>setloc(event.target.value)}/>
                </label>
                <label> 
                    Childern 
                    <input type="number" name="children" ref={register} onChange={event=>setkids(event.target.value)}/>
                </label>
                <label>Do you have a Bank?</label>
                <label>Yes
                <input name="Bank" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} /> 
                </label><label>No
                <input name="Bank" type="radio" value="No" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} />
                </label>
                

                <label>Do you have a Mutual Funds or Stocks?</label>
                    <label>Yes
                    <input name="mutualfund" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)} /> 
                    </label><label>No
                    <input name="mutualfund" type="radio" value="No" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)}/>
                    </label> 


                 <label>
             <button type="submit" >Submit</button>
             </label>

            </form>
        </div>


    )



}





export default FormsAndInputs;