class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (!book || !book.title || !book.author) {
      throw new Error("Livro inválido");
    }

    if (this.books.some((b) => b.title === book.title)) {
      throw new Error("Livro já cadastrado");
    }

    this.books.push(book);
  }

  removeBook(title) {
    const index = this.books.findIndex((b) => b.title === title);
    if (index === -1) {
      throw new Error("Livro não encontrado");
    }
    this.books.splice(index, 1);
  }

  findBook(title) {
    return this.books.find((b) => b.title === title) || null;
  }

  getBooksByAuthor(author) {
    return this.books.filter((b) => b.author === author);
  }

  getTotalBooks() {
    return this.books.length;
  }

  clearLibrary() {
    this.books = [];
  }
}

module.exports = Library;
