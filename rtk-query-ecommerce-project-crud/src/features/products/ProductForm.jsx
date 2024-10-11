import { nanoid } from "nanoid";
import { useState } from "react";
import { useAddProductsMutation } from "../../services/productsApi";


const ProductForm = () => {
	const [addProduct] = useAddProductsMutation()
	const [product, setProduct] = useState({
		
		title:'',
		description: '',
		price: '',
	})
	const handleChange = (e) =>{
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value // Correct syntax to update state
		}));
	}
	const handleSubmit = async (event)=> {
		event.preventDefault()	
		console.log({...product, id:nanoid()})
		try {
			await addProduct({...product, id:nanoid()})
			
		} catch (error) {
			console.log('data fethcing faild' , error)
		}
	}
	return (
		<div className="mb-5">
				<form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4' action="">
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="text" name="title" placeholder='Tilte' value={product.title} id="" required/>
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="text" name="description" placeholder='Description' value={product.description} id="" required/>
				<input className='border border-black py-[2px] px-1' onChange={handleChange} type="number" name="price" placeholder='Price' value={product.price} id="" required/>
			
				<button className='bg-red-300 px-3 py-1 font-semibold w-[200px] mb-10' type='submit'>Add Product</button>
			</form>
		</div>
	);
};

export default ProductForm;