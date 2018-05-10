import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
	render() {
    const { books, title, onShelfChange } = this.props
		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book 
                book={book}
                books={books}
                key={index}
                onShelfChange={ onShelfChange }
              />
            ))}  
          </ol>
        </div>
      </div>
    )
	}
}

export default BookShelf