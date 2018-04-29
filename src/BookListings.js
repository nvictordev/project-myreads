import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
	state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
	}

  render() {
    const { currentlyReading, wantToRead, read} = this.state
    const { books } = this.props 
    const shelfTitles = ['Currently Reading', 'Want to read', 'Read']
    return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         { shelfTitles.map((shelfTitle, index) => (
             <BookShelf
               title={shelfTitle}
               key={index}
               books={books}
             />
         ))}
       </div>
     </div>
    )
  }
}

export default BookListings;