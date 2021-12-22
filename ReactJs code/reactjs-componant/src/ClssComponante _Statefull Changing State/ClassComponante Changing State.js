import React from 'react'
class BooksDetails extends React.Component
{
     constructor()
     {
         super(); 
         this.state=
         {
             BooksId:111,
             BooksName:"Science",
             BooksPrice:118,
             Bookspage:80,
         }
     }
     changinditais = () => {
         this.setState({BooksName:"Maths"});
         this.setState({BooksId:112});
         this.setState({BooksPrice:123});
         this.setState({Bookspage:79});
     }

     render()
     {
         const dispBooksData=
         <div>
             <h1>Books Id:{this.state.BooksId}</h1>
             <h1>Books Name:{this.state.BooksName}</h1>
             <h1>Books Price:{this.state.BooksPrice}</h1>
             <h1>Books Pages:{this.state.Bookspage}</h1>
             <button type="button" onClick={this.changinditais}>Change Detais</button>
         </div>
         return dispBooksData;
     }

}

export default BooksDetails;
