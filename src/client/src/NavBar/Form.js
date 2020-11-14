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
const [finA,setfinA] = useState(0);  

const [finalI, setfinalI] = useState(0);
const [finalA,setfinalA] = useState(0);
const [stockf,setstockf] = useState(0); 
const [fkids,setfkids] = useState(0); 
const [costL,setcostL] = useState(0);

    return( 
        <div className="FormsAndInputs"> 
         <form onSubmit={handleSubmit(onSubmit)}> 
          
          
                <h1 className="className">Possible Goals for Stonks.io?</h1>
                <label for="capGrowth" className="capGrow"> 
                        <input  name="capGrowth" id="capGrowth" type="checkbox" ref={
                             register()
                             } onInput = {()=>setcapG(capG ==1 ? 0:1)}/>  
                       <space></space> Capital Growth </label>
                    <div></div> 
                   
                    <label for="startBus" className="startbiz">
                     <input name="startBus"  type="checkbox" id="startBus" ref={
                  
                  register()
                     } onInput = {()=>setbus(bus ==1 ? 0:1)} />
                    <space></space> Starting a Business</label>
                    <div></div>
                    <label for="finCol" className="finny">
                    <input name="finCol" type="checkbox" id="finCol" ref={
                register()
                 } onInput = {()=>setfinC(finC ==1 ? 0:1)}/>
                <space></space> Financing College</label>
             <div></div>
             <label for="livingExpense" className="livE">
                <input name="livingExpense" type="checkbox" id="livingExpense" ref={
                register()
                } onInput = {()=>setlE(lE ==1 ? 0:1)}/>
               <space></space> Budget Living Expenses</label>
                    <div></div>
          
          
                <h1 className="info">Personal Information</h1>
          
      
                <label className="inc"> 
                    Income <space></space>$          
                    <input type="number" name="income" ref={register} onChange={event=>setrev(event.target.value)}/>
                    </label> <br></br>
                <label className="expe"> 
                    Expenses <space></space>$
                    <input type="number" name="expense" ref={register} onChange={event=>setexp(event.target.value)}/>
                </label> <br></br>
                <label className="fib"> 
                    State Fib Code <space></space>
                    <input type="text" name="location" ref={register} onChange={event=>setloc(event.target.value)}/>
                </label> <br></br>
                <label className="child"> 
                    Childern <space></space>
                    <input type="number" name="children" ref={register} onChange={event=>setkids(event.target.value)}/>
                </label> <br></br>
                <label className="bannk">Do you have a Bank?</label>
                <label className="bannky"><space></space> Yes
                <input name="Bank" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} /> 
                </label><label className="bannkn"><space></space> No
                <input name="Bank" type="radio" value="No" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} />
                </label> <br></br>
                

                <label className="stonkk">Do you have a Mutual Funds or Stocks?</label>
                    <label className="stonkky"><space></space> Yes 
                    <input name="mutualfund" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)} /> 
                    </label><label className="stonkkn"> No 
                    <input name="mutualfund" type="radio" value="No" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)}/>
                    </label> <br></br>

                    <label className="finAS">Do you have Finacial Assistance?</label>
                    <label className="finASy"><space></space> Yes
                    <input name="finass" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setfinA(finA ==1 ? 0:1)} /> 
                    </label ><label className="finASn"><space></space> No
                    <input name="finass" type="radio" value="No" ref={register({required: true })} onInput = {()=>setfinA(finA ==1 ? 0:1)}/>
                    </label> <br></br>



                 <label className="submitb">
             <button type="submit" onClick ={()=>setfinalI(rev)} onClick ={()=>setfinalA(finA)} onClick ={()=>setstockf(stonk)}
             onClick ={()=>setfkids(kids)} onClick ={()=>setcostL(loc)} className="submitbutton"
             >Submit</button>
             </label>

            </form>
        </div>


    )



}





export default FormsAndInputs;