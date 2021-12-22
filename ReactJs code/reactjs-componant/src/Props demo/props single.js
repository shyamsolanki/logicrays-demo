import React from 'react'

class BooksData extends React.Component
{
     render()
     {
         return <h1>The name of Books is: {this.props.bookName}</h1>
     }
}
export default BooksData;