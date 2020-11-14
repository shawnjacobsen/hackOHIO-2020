import React, { Component } from 'react' 
import {useForm} from "react-hook-form";

function FormsAndInputs(){ 
    const { register, handleSubmit } = useForm(); 
    const onSubmit = (values) => console.log(values);
    return( 
        <div className="FormsAndInputs"> 
         <form onSubmit={handleSubmit(onSubmit)}> 
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
        <label> 
            
        </label>
            <label>
            <button type="submit">Submit</button>
            </label>

         </form>
        </div>


    )



}
export default FormsAndInputs;