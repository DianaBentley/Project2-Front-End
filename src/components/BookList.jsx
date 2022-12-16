import Book from "./Book"

const BookList = ({books, setBook, deleteBook}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            {books && books.length ? (
                <>
                    <h2 className="font-black text-white text-3xl text-center mb-5">Books Read</h2>
                    <div className="md:h-screen overflow-y-scroll">
                        { books.map( book => (
                            <Book 
                                key={book.id}
                                book={book}
                                setBook={setBook}
                                deleteBook={deleteBook}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-white text-3xl text-center">There are no books</h2>
                    <p className="text-xl text-white mt-5 mb-10 text-center">
                        Start adding books {''}
                    </p>
                </>
            )}
        </div>
    )
}

export default BookList