import React from 'react'

class StudentOnClick extends React.Component
{
    constructor(){
        super();
        this.state=
        {
            Studentfirstname:'',
            Studentlastname:'',
            Studentemail:'',
            Studentphone:'',
            Studentpassword:'',
            Studentgender:'',
        }

    }
    changeAllInfo = (event) =>
    {
        
        event.preventDefault();
        
        this.setState({Studentfirstname: document.getElementById('fname_id').value})

        
        this.setState({Studentlastname: document.getElementById('lname_id').value})

        
        this.setState({Studentemail: document.getElementById('email_id').value})

        
        this.setState({Studentphone: document.getElementById('phone_id').value})


        this.setState({Studentpassword: document.getElementById('password_id').value})

        this.setState({Studentgender: document.frmregister.gender.value})
    }

    render()
    {
        const disform_Student=
        <div class ="center">
            <form name="frmregister">
                <table> 
                <h1> Student Registration Form</h1>
                <tr>
                    <td> First Name</td>
                    <td><input type='text' name= 'fname' id ='fname_id' placeholder='First Name'/></td>
                </tr>

                <tr>
                    <td> Last Name</td>
                    <td><input type='text' name= 'lname' id ='lname_id' placeholder='Last Name'/></td>
                </tr>

                <tr>
                    <td> Email</td>
                    <td><input type='email' name= 'email' id ='email_id' placeholder='Email'/></td>
                </tr>
                <tr>
                    <td> Phone Number</td>
                    <td><input type='text' name= 'phone' id ='phone_id' placeholder='Phone'/></td>
                </tr>

                <tr>
                    <td> Password</td>
                    <td><input type='password' name= 'password' id ='password_id' placeholder='password'/></td>
                </tr>
    <tr>
          <td>Select Gender</td>
          <td>
          <input type="radio" name="gender" value="Female" /> FEMALE
          <input type="radio" name="gender" value="Male" /> MALE
           </td>
    </tr>
                <tr>
                    <td> </td>
                    <td>
                        <button onClick={this.changeAllInfo}>Student Registration</button> 
                        </td>
                </tr>

                </table> 
                <h1>----Student  Information----</h1>
                <h2> First Name of Student : {this.state.Studentfirstname}</h2>
                <h2> last Name Of Student : {this.state.Studentlastname}</h2>
                <h2> Email Of Student : {this.state.Studentemail}</h2>
                <h2> Phone Number Of Student : {this.state.Studentphone}</h2>
                <h2> Password : {this.state.Studentpassword}</h2>   
                <h2>Gender : {this.state.Studentgender}</h2> 
            </form>
        </div>
        return disform_Student;
    }
    
}

export default StudentOnClick;