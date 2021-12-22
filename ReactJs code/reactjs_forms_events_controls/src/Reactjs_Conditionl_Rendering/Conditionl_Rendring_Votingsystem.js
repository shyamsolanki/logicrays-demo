import React from 'react'
class ConditionalRendringVotingSystem extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            votingsystem:"",
        }
    }
    onClickVotingsystem =(event) =>
    {
         event.preventDefault()
            this.setState({votingsystem:event.target.value})
    }
    render()
    {
        let header='';

        if(this.state.votingsystem >=18){
                header=<h1> Hello {this.state.votingsystem}</h1>;
        }
        else{
            header=<h1>Your age is not valid for vote</h1>;
        }
        const disp_form=
        <div>
            <form>
                
                   <table>
                       
                        <tr>
                            <td> Enter Your age: </td>
                            <td><input type='text' name= 'votingsystem' id ='VotingSystem_id' /></td>
                            <td>
                                <button onClick={this.onClickVotingsystem}>Submit</button>
                            </td>
                        </tr>
                    </table> 
                    {header}
            </form>


        </div>

        return disp_form;
    }
}
export default ConditionalRendringVotingSystem;
    
