import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookListings from './BookListings'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookListings
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
