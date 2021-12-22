import React from 'react'
class BooksDetails extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            bookname:"",
            bookprice:null,
            bookpages:null,
            errormessage:"",
        }
    }
    onClickAllBooksDetails = (event) =>
    {
        event.preventDefault();
        
        let bnm = document.frmbookdetails.bookname.value;   
        let bpr = document.frmbookdetails.bookprice.value;
        let bpg = document.frmbookdetails.bookpages.value;
        this.setState({bookname:bnm})
        this.setState({bookprice: bpr})
        this.setState({bookpages: bpg})
        
         
        let err ="";

        /*alert(statename);
        alert(val);*/

        if(((bpr) !=='' && !Number(bpr)) || ((bpg) !=='' && !Number(bpg)))
        {
            
                err=<strong>Input should be in numeric format!! </strong>;
            
        }
        this.setState({errormessage:err});
        //this.setState({[statename]:val});

    }
    render()
    {
        const disp_form=
        <div>
            <form name = "frmbookdetails">
                <center>
                    <h1><u>Handeling Multipal Input</u></h1>
                <table>
                    <tr>
                        <td>Book Name:</td>
                        <td>{this.state.bookname}</td>
                    </tr>
                    <tr>
                        <td>Book Price:</td>
                        <td>{this.state.bookprice}</td>
                    </tr>
                    <tr>
                        <td>Book Pages:</td>
                        <td>{this.state.bookpages}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Enter Your Book Name</td>
                        <td><input type="text" name="bookname" /></td>
                    </tr>
                    <tr>
                        <td>Enter Book Price </td>
                        <td>
                            <input type="text" name="bookprice"/> {this.state.errormessage}
                        </td>
                    </tr>
                    <tr>
                        <td>Enter your Book Pages</td>
                        <td>
                            <input type="text" name="bookpages"/> {this.state.errormessage}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="button" name="action_submit" value="SUBMIT" onClick={this.onClickAllBooksDetails}/>
                            <input type="reset" name="action_reset" value="RESET"/>
                            
                        </td>
                    </tr>
                </table>
                </center>
                
            </form>
        </div>
        return disp_form;
    }
}
export default BooksDetails