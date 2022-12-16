import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import BookList from "./components/BookList"

function App() {

  // El valor inicial es [] si no hay nada en storage, si hay algo entonces se agrega al [] y ya no es un [] vacio
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) ?? []);
  const [book, setBook] = useState({});

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify( books ));
  }, [books])

  const deleteBook = id => {
    const booksUpdated = books.filter( book => book.id !== id);
    setBooks(booksUpdated)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
          <Form 
            books={books}
            setBooks={setBooks}
            book={book}
            setBook={setBook}
          />
          <BookList 
            books={books}
            setBook={setBook}
            deleteBook={deleteBook}
          />
      </div>
    </div>
  )
}

export default App