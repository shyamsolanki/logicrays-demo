
import React from "react";


class ConditionalRenderingExample extends React.Component
{
    // Default value of username will be set by Constructor as blank
    constructor(){

        super();
        this.state=
        {
            username:'',
        }

    }
    // This function will change the username state value
    changeUserName =(event)=>
    {
        this.setState({username:event.target.value})

    }

    render()
    {
        //This header will print the hello message, once user enter the name.
        let header='';

        if(this.state.username){
                header=<h1> Hello {this.state.username}</h1>;
        }
        else{
            header='';
        }
        const disp_form=
        <div>
            <form>
                
                   <table>
                       
                        <tr>
                            <td> Enter the Username: </td>
                            <td><input type='text' name= 'Username' id ='Username_id' onChange={this.changeUserName}/></td> 
                        </tr>

                        
                    </table> 
                    {header}
            </form>


        </div>

        return disp_form;
    }
}
export default ConditionalRenderingExample;
