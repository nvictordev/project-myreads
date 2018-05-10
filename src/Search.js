import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  state = {
    query: '',
    bookSearch: [],
    errorMessage: false
  }
  updateSearch = (query) => {
    this.setState({ query: query.trim() })
    if (query) {
      BooksAPI.search(query).then((bookSearch) =>
        bookSearch.length > 0 ? this.setState({ bookSearch }) : this.setState({ bookSearch: [], errorMessage:true }))
    } else {
      this.setState({ bookSearch:[] })
    }
  }
  render() {
    const { query, bookSearch, errorMessage } = this.state
    const { books, onShelfChange } = this.props
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={e => this.updateSearch(e.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {bookSearch.map((book, index) => {
                  return (
                    <Book
                      books={books}
                      book={book}
                      key={index}
                      onShelfChange={onShelfChange}/>
                  )
                })}
            </ol>
            { errorMessage && (
              <div>
                <h4>No Books Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

