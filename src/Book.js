import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
	render() {
   const { books, book, onShelfChange } = this.props
   const bookImage = book.imageLinks ? book.imageLinks.thumbnail : null
   let designatedShelf = 'none'
   for (let designatedBook of books) {
     if (designatedBook.id === book.id) {
       designatedShelf = designatedBook.shelf
       break
     }
   }
	 return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookImage})`
          }}>
          </div>
          <div className="book-shelf-changer">
            <select value={designatedShelf} onChange={e => onShelfChange(book, e.target.value)}>
              <option value="none" disabled>Move to ...</option>
              <option value="currentlyReading"> Current Reading</option>
              <option value="wantToRead">Want to read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors}
        </div>
      </div>
    </li>
   )	
	}
}

export default Book
				