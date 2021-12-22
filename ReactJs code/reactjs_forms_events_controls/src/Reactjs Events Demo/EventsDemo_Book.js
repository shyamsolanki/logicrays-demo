import React from 'react'
class BooksDetails extends React.Component
{
     constructor()
     {
         super(); 
         this.state=
         {
             BooksId:'',
             BooksName:'',
             BooksPrice:'',
             Bookspage:'',
         }
     }
     BookIdChangeEvent = (id) => {
        this.setState({BooksId:id.target.value}); 
     }
     BookNameChaneEvent = (bname) => {
        this.setState({BooksName:bname.target.value});
     }   
         
     BookPriceChangeEvent = (bprice) => {
        this.setState({BooksPrice:bprice.target.value});
     }
       
     BookPagesChangeEvent = (bpage) => {
        this.setState({Bookspage:bpage.target.value});
     }
         
     render()
     {
         const dispBooksData=
         <div>
             <form>
                <h1>Book Registration Form</h1>
                <table>
                    <tr>
                        <td>
                            <p>Enter book ID : </p>
                        </td>
                        <td>
                            <input type='text' name='Bid' onChange={this.BookIdChangeEvent}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter Book name : </p>
                        </td>
                        <td>
                            <input type='text' name='Bname' onChange={this.BookNameChaneEvent}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter Book Price : </p>
                        </td>
                        <td>
                            <input type='text' name='bprice' onChange={this.BookPriceChangeEvent}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter book Pages : </p>
                        </td>
                        <td>
                            <input type='text' name='Bpage' onChange={this.BookPagesChangeEvent}></input>
                        </td>
                    </tr>
                </table>

                <h1>-----User Information---------</h1>
                <h2> Your Id is: {this.state.BooksId}</h2>
                <h2> Your book Name is:{this.state.BooksName} </h2>
                <h2> Your Book Price is:{this.state.BooksPrice}</h2>
                <h2> Your Pages is: {this.state.Bookspage}</h2>
                
                </form>
         </div>
         return dispBooksData; 
         
     }

}

export default BooksDetails;
