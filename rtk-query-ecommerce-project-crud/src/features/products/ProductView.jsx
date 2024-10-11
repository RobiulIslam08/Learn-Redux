import { useGetProductsQuery } from "../../services/productsApi";


const ProductView = () => {
	const { data:products, error, isLoading } = useGetProductsQuery()
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
							
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductView;