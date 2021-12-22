import React from 'react'

class BookInfo extends React.Component
{
    render()
    {
        const bookdata=
        <div>
             <h1>Books Information</h1>
             <h1>Books Id:{this.props.BooksId}</h1>
             <h1>Books Name:{this.props.booksName}</h1>
             <h1>Books Price:{this.props.BooksPrice}</h1>
             <h1>Books Pages:{this.props.Bookspage}</h1>
        </div>

        return bookdata;
    }
}
export default BookInfo;