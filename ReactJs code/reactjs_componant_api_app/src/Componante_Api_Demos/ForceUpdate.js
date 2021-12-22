
import React from "react";
class ForceUpdateExample extends React.Component
{
    constructor()
    {
        super();
        this.demonstrateforceUpdate_Method=this.demonstrateforceUpdate_Method.bind(this);
    }
    demonstrateforceUpdate_Method()
    {
        this.forceUpdate();  
    }
    render() {  
        const disp_data=
            <div>  
               <h1>Example to generate random number using forceUpdate() method</h1>  
               <h3>Random number: {Math.random()}</h3>  
               <button onClick = {this.demonstrateforceUpdate_Method}>Force To Update the number</button>  
           </div>  
        return disp_data;  
     }  
}
export default ForceUpdateExample;