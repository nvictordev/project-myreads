import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const shelfTitles = [{title: 'Currently Reading', type: 'currentlyReading'},
                         {title: 'Want to read', type: 'wantToRead'},
                         {title: 'Read', type: 'read'}]
    const { books } = this.props
    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         {shelfTitles.map(shelfTitle => {
          return (
            <BookShelf
             title={shelfTitle.title}
             key={index}
             books={books.filter(book => book.shelf === shelfTitle.type)}/>
          )
         })}
       </div>
       <div className="open-search">
         <a>Add a book</a>
       </div>
     </div>
    )
  }
}

export default BookListings;