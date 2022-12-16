const Book = ({book, setBook, deleteBook}) => {
    const { name, author, stars, date, about, id } = book

    const handleDelete = () => {
        const answer = confirm('Do you want to delete this book?');

        if(answer) {
            deleteBook(id)
        }
    }

    return (
        <div className="mx-5 mb-10 bg-violet-50 shadow-md px-5 py-5 rounded-xl">
            <p className="font-bold mb-3 text-black uppercase">Name: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-black uppercase">Author: {''}
                <span className="font-normal normal-case">{author}</span>
            </p>

            <p className="font-bold mb-3 text-black uppercase">Stars: {''}
                <span className="font-normal normal-case">{stars}</span>
            </p>

            <p className="font-bold mb-3 text-black uppercase">Month: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-black uppercase">About this book: {''}
                <span className="font-normal normal-case">{about}</span>
            </p>

            <div className="flex justify-between mt-5">
                <button 
                    type="button"
                    className="py-2 px-10 bg-violet-500 hover:bg-violet-900 text-white font-bold uppercase rounded-lg"
                    onClick={() => setBook(book)}
                >Edit</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-pink-500 hover:bg-pink-600 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    )
}

export default Book