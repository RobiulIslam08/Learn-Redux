import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/bookSlice";

const BookList = () => {
	const books = useSelector((state) => state.booksR.books)
	const dispatch = useDispatch()
	const handleDelete  = (id) =>{
	dispatch(deleteBook(id))
	}
	return (
		<div>
		
			{books && books.length> 0 ? <div className="grid grid-cols-3 gap-10 ">
				{books.map((book) =>
					<div className="bg-emerald-300 p-5 shadow-lg border-b-2 border-b-orange-600 rounded-b-xl" key={book.title}>
						<p className="font-bold text-2xl">Book Title: {book.title}</p>
						<p className="font-bold">Price: {book.price}</p>
						<p className="font-bold">Author: {book?.author}</p>
						<p className="font-bold">Quantity: {book?.quantity}</p>
						<button onClick={()=> handleDelete(book.id)} className="bg-blue-400 px-3 py-1 rounded-sm mt-3">Delete</button>
					</div>)}
			</div>: <p> there is no book exits</p> }
		</div>
	);
};

export default BookList;