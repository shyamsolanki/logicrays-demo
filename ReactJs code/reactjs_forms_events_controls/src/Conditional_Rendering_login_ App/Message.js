// This function will perform the operation of LogOut

export function Message(props){

    let msg='';

    if(props.isLoggedIn){
    
        msg=<h1> Welcome, you have successfully LogedIn.. </h1>

        return msg;
    }
    else{

        msg=<h1> Please LogIn First, you have Loged Out !!! </h1>

        return msg;
    }
}