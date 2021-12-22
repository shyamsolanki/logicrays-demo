//LogIn LogOut Class Componante
import React from "react";
import { Login } from "./Login_Operation";
import { Logout } from "./Logout_Operation";
import { Message } from "./Message";

class LogInLogOutApp extends React.Component
{
    constructor(props){
        super(props);

         // Initial Login status of person is false
         this.state = {isLoggedIn:false}
    }

     // This function will change the logIn state/status as = "True", when person is LogedIn

     handleLogIn(){
        this.setState = ({isLoggedIn:true})
     }
     // This function will change the logOut state/status as = "False", when person is LogedOut
    
    handleLogOut(){
        this.setState = ({isLoggedIn:false})
    }

    render()
    {
        const disp_data =
        
        <div>
            <center><h1> Login/Logout Conditional Rendering Example. </h1></center>
            <Message isLoggedIn ={this.state.isLoggedIn}/>
            {
                (this.state.isLoggedIn)?(<Logout clickInfo={this.handleLogOut}/>):(<Login clickInfo={this.handleLogIn}/>)
            }
        </div>
            return disp_data;
    }

}
export default LogInLogOutApp

