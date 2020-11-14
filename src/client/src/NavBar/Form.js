import React, { Component } from 'react'; 


class FormsAndInputs extends Component{ 

    handleSubmit = () => { 

    } 
    handleInputChange = () => { 

    } 
    render () { 
        return ( 
            <div> 
                <h1>Goals</h1> 
                <form> 
                    <p><input type='text' placeholder='Your Name' name='name' /></p> 
                    <p><button>Submit</button></p>
                </form>
            </div>
        )
    }
} 
 export default FormsAndInputs;

