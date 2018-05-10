import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookListings from './BookListings'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  shelfChange = (book, shelf) => {
	  BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
	    let bookShelves = this.state.books.filter((currentBook) => currentBook.id !== book.id)
      bookShelves.push(book)
      this.setState({ books: bookShelves })
		})
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookListings
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
