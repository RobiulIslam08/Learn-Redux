import React, { useState } from 'react';

const BookForm = () => {
	const [book, setBook] =  useState({
		title: '',
		author: '',
		price: '',
		quantity: ''
	})
	
	const handleChange = (e) =>{
		const { name, value } = e.target;
		setBook((prevBook) => ({
			...prevBook,
			[name]: value // Correct syntax to update state
		}));
	}
	const handleSubmit = (event)=> {
		event.preventDefault()
		console.log(book)
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4' action="">
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="text" name="title" placeholder='Tilte' value={book.title} id="" required/>
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="text" name="author" placeholder='Author' value={book.author} id="" required/>
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="number" name="price" placeholder='Price' value={book.price} id="" required/>
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="number" name="quantity" placeholder='Quantity' value={book.quantity} id="" required/>
				<button className='bg-red-300 px-3 py-1 font-semibold w-[200px] mb-10' type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default BookForm;