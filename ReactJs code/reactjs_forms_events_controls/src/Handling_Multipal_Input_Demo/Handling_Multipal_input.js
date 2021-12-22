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
        }
    }
     // This function will change all states using single setState method 
     changeAllUserdetails = (event) =>
     {
        let statename = event.target.name;
        //alert(statename);
        let val = event.target.value;
        //alert(val);
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
                    </tr>
                 </table>
             </form>
         </div>
         return disp_form;
     }
}
export default UserDetails