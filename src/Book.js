import React, { Component } from 'react'

class Book extends Component {
	render() {
   const { book, onShelfChange } = this.props
	 return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
          }}>
          </div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={e => onShelfChange(book, e.target.value)}>
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
				