import React from 'react'
class BooksDetails extends React.Component
{
     constructor()
     {
         super(); 
         this.state=
         {
             BooksId:111,
             booksName:"Science",
             BooksPrice:118,
             Bookspage:80,
         }
     }

     render()
     {
         const dispBooksData=
         <div>
             <h1>Books Id:{this.state.BooksId}</h1>
             <h1>Books Name:{this.state.booksName}</h1>
             <h1>Books Price:{this.state.BooksPrice}</h1>
             <h1>Books Pages:{this.state.Bookspage}</h1>
         </div>
         return dispBooksData;
     }

}

export default BooksDetails;