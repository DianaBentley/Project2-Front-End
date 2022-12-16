import { useState, useEffect } from 'react';
import Error from './Error'

const Form = ({ books, setBooks, book, setBook }) => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [stars, setStars] = useState('');
    const [date, setDate] = useState('');
    const [about, setAbout] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(book).length > 0  ) {
            setName(book.name)
            setAuthor(book.author)
            setStars(book.stars)
            setDate(book.date)
            setAbout(book.about)
        }
    }, [book])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ name, author, stars, date, about ].includes('') ) {
            console.log('There is at leat one field missing')

            setError(true)
            return;
        } 
        
        setError(false)

        // Book Object
        const bookObject = {
            name, 
            author, 
            stars, 
            date, 
            about
        }

        if(book.id) {
            // Editando el Registro
            bookObject.id = book.id
            const booksUpdated = books.map( bookState => bookState.id === book.id ? bookObject : bookState )

            setBooks(booksUpdated)
            setBook({})

        } else {
            // Nuevo registro
            bookObject.id = generateId();
            setBooks([...books, bookObject]);
        }

        // Reiniciar el form
        setName('')
        setAuthor('')
        setStars('')
        setDate('')
        setAbout('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-white text-3xl text-center mb-5">Add Books</h2>

            <form 
                onSubmit={handleSubmit}
                className="bg-violet-50 shadow-md rounded-lg py-3 px-5 mb-5"
            >
                { error &&  <Error><p>All fields are required</p></Error>}
                <div className="mb-5">
                    <label htmlFor="book" className="block text-black uppercase font-bold">
                        Name
                    </label>
                    <input
                        id="book"
                        type="text"
                        placeholder="Book Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="author" className="block text-black uppercase font-bold">
                        Author
                    </label>
                    <input
                        id="author"
                        type="text"
                        placeholder="Author Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="stars" className="block text-black uppercase font-bold">
                        Stars
                    </label>
                    <input
                        id="stars"
                        type="number"
                        min="0"
                        max="5"
                        placeholder="Stars out of 5"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={stars}
                        onChange={ (e) => setStars(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="month" className="block text-black uppercase font-bold">
                        Month
                    </label>
                    <input
                        id="month"
                        type="month"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="about" className="block text-black uppercase font-bold">
                        About this book
                    </label>
                    <textarea 
                        id="about"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="About this book"
                        value={about}
                        onChange={ (e) => setAbout(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-violet-500 w-full p-3 text-white uppercase font-bold hover:bg-violet-900 cursor-pointer transition-colors rounded-xl"
                    value={ book.id ? 'Edit Book' : 'Add Book' }
                />
            </form>
        </div>
    )
}

export default Form