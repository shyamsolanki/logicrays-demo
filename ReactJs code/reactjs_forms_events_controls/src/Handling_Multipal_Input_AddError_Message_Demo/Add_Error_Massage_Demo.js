import React from 'react'

class UserDetails extends React.Component
{
    constructor()
    {
        super()
        this.state =
        {
            username:'',
            age:null,
            errormassage:'',
        }
    }
     // This function will change all states using single setState method 
     changeAllUserdetails = (event) =>
     {
        let statename = event.target.name;
        //alert(statename);
        let val = event.target.value;
        //alert(val);
        let err ='';
            if(statename==="age")
            {
                if(val!="" && !Number(val))
                {
                        err=<strong> Your age must be number!! </strong>;
                }
            }
            this.setState({errormessage:err});
            this.setState({[statename]:val});
     }
     render()
     {
         const disp_form =
         <div>
             <form>
                 <h1> Hello,{this.state.username}, you age is {this.state.age}</h1>
                 <table>
                 <tr>
                        <td> Enter your Username: </td>
                        <td><input type='text' name='username' onChange={this.changeAllUserdetails} /></td>
                    </tr>

                    <tr>
                        <td> Enter your Age: </td>
                        <td><input type='text' name='age' onChange={this.changeAllUserdetails}/></td>
                        {this.state.errormessage}
                    </tr>
                 </table>
             </form>
         </div>
         return disp_form;
     }
}
export default UserDetails