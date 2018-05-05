import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    bookSearch: ['love', 'vp'] 
  }
  updateSearch(query) {
    BooksAPI.search(query).then((bookSearch) =>
      this.setState({ bookSearch }))
    this.setState({ query })
  }
  render() {
    const { query, bookSearch } = this.state
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" 
                placeholder="Search by title or author"
                value={query}/>
                onChange={e => this.updateSearch(e.target.value)}
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              { query.length > 0 && (
                {bookSearch.map(book => (
                  <Book
                    book={book}
                  />
                ))}
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search

