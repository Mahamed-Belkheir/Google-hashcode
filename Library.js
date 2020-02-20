class Library {
  constructor() {
    this.books = []
  }

  add_book = (book) => {
    this.books.push(book)
  }
}

module.exports = Library