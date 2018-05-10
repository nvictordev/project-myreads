import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  render() {
    const shelfTitles = [{title: 'Currently Reading', type: 'currentlyReading'},
                         {title: 'Want to read', type: 'wantToRead'},
                         {title: 'Read', type: 'read'}]
    const { books, onShelfChange } = this.props
    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         {shelfTitles.map((shelfTitle, index) => {
          return (
            <BookShelf
             title={shelfTitle.title}
             key={index}
             books={books.filter(book => book.shelf === shelfTitle.type)}
             onShelfChange={onShelfChange}/>
          )
         })}
       </div>
       <div className="open-search">
         <Link to='/search'>Add a book</Link>
       </div>
     </div>
    )
  }
}

export default BookListings;