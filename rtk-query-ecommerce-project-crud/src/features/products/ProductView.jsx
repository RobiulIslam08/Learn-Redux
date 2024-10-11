import { useDeleteProductsMutation, useGetProductsQuery } from "../../services/productsApi";


const ProductView = () => {
	const { data:products, error, isLoading } = useGetProductsQuery()
	const [deleteProduct] = useDeleteProductsMutation()
	const handleDelete =async (id) =>{
		await deleteProduct(id)
	}
	return (
		<div>
			<h1>Product List</h1>

			{isLoading && <p>loading.....</p>}
			{error && <p>Error hoise</p>}
			{!error && !isLoading && products && products.length > 0 && (
				<div className="grid grid-cols-4 gap-4 ">
					{products.map((product) => (
						<div className="bg-lime-200 shadow-lg p-4 border-2 border-yellow-200" key={product.id}>
							<h3><span className="font-semibold  text-lg">Titile</span> {product.title}</h3>
							<p><span className="font-semibold  text-lg">Desciption</span> {product.description}</p>
							<p><span className="font-semibold  text-lg">Price:</span> ${product.price}</p>
							<button onClick={()=> handleDelete(product.id)} className="bg-cyan-300 px-3 py-1">Delete</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductView;