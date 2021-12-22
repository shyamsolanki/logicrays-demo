import React from 'react'
class BooksonClick extends React.Component
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
     changeallInfo = (event) =>
      { 
        event.preventDefault();
        this.setState({BooksId:document.getElementById('book_id').value}); 
     
        this.setState({BooksName:document.getElementById('book_name').value});
    
        this.setState({BooksPrice:document.getElementById('book_price').value});
     
        this.setState({Bookspage:document.getElementById('book_page').value});
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
                            <input type='text' name='Bid' id="book_id" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter Book name : </p>
                        </td>
                        <td>
                            <input type='text' name='Bname' id="book_name" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter Book Price : </p>
                        </td>
                        <td>
                            <input type='text' name='bprice' id="book_price" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Enter book Pages : </p>
                        </td>
                        <td>
                            <input type='text' name='Bpage' id="book_page" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={this.changeallInfo}>Submit</button> 
                        <input type="reset" name="action" value="Reset"></input>
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

export default BooksonClick;
