import React, { Component } from 'react' 
import {useForm} from "react-hook-form";
import { useState, useEffect } from 'react';

function FormsAndInputs(props){ 
    const { register, handleSubmit } = useForm(); 
    const onSubmit = (values) => console.log(values);

const [capG,setcapG] = useState(0);

useEffect (()=> { 
   document.title = `Sup ${capG}`;
        });

    return( 
        <div className="FormsAndInputs"> 
         <form onSubmit={handleSubmit(onSubmit)}> 
          
          
                <h1>What are you most interested in doing on Stonks.io?</h1>
                <label for="capGrowth"> 
                        <input  name="capGrowth" id="capGrowth" type="checkbox" ref={
                             register()
                             }/>
                       Capital Growth </label>
                    <div></div> 
                    <button onClick = {()=>setcapG(capG ==1 ? 0:1)}> submitusdfus</button>
                    <label for="startBus">
                     <input name="startBus"  type="checkbox" id="startBus" ref={
                  
                  register()
                     }  />
                    Starting a Business</label>
                    <div></div>
                    <label for="finCol">
                    <input name="finCol" type="checkbox" id="finCol" ref={
                register()
                 }/>
                Financing College</label>
             <div></div>
             <label for="livingExpense">
                <input name="livingExpense" type="checkbox" id="livingExpense" ref={
                register()
                } />
                Budget Living Expenses</label>
                    <div></div>
          
          
                <h1>Information</h1>
          
      
                <label> 
                    Income           
                    <input type="number" name="income" ref={register}/>
                    </label> 
                <label> 
                    Expenses 
                    <input type="number" name="expense" ref={register}/>
                </label> 
                <label> 
                    Location 
                    <input type="text" name="location" ref={register}/>
                </label>
                <label>Do you have a Bank?</label>
                <label>Yes
                <input name="Bank" type="radio" value="Yes" ref={register({required: true })}/> 
                </label><label>No
                <input name="Bank" type="radio" value="No" ref={register({required: true })}/>
                </label>
                
                <label>Do you have a Portfolio?</label>
                <label>Yes
                <input name="portfolio" type="radio" value="Yes" ref={register({required: true })}  /> 
                </label><label>No
                <input name="portfolio" type="radio" value="No" ref={register({required: true })} />
                </label>
                
                    <label>Do you have a Mutual Fund?</label>
                    <label>Yes
                    <input name="mutualfund" type="radio" value="Yes" ref={register({required: true })}/> 
                    </label><label>No
                    <input name="mutualfund" type="radio" value="No" ref={register({required: true })}/>
                    </label> 
                    <label> 
                    Number of Stocks held 
                    <input type="number" name="stocks" ref={register}/>
                </label>
                <label>Do you have a Mortgage?</label>
                    <label>Yes
                    <input name="mortgage" type="radio" value="Yes" ref={register({required: true })}/> 
                    </label><label>No
                    <input name="mortgage" type="radio" value="No" ref={register({required: true })}/>
                    </label> 
                    

                 <label>
             <button type="submit">Submit</button>
             </label>

            </form>
        </div>


    )



}
export default FormsAndInputs;