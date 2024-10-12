// import { useState } from "react";
// import { useDeleteProductsMutation, useGetProductsQuery } from "../../services/productsApi";
// import UpdateProduc from "./UpdateProduc";


// const ProductView = () => {
// 	const { data:products, error, isLoading } = useGetProductsQuery()
// 	const [deleteProduct] = useDeleteProductsMutation()
// 	const [editingProduct, setEditingProduct] = useState(null)
// 	const handleDelete =async (id) =>{
// 		await deleteProduct(id)
// 	}
// 	return (
// 		<div>
// 			<h1>Product List</h1>

// 			{isLoading && <p>loading.....</p>}
// 			{error && <p>Error hoise</p>}
// 			{!error && !isLoading && products && products.length > 0 && (
// 				<div className="grid grid-cols-4 gap-4 ">
// 					{products.map((product) => (
// 						<div className="bg-lime-200 shadow-lg p-4 border-2 border-yellow-200" key={product.id}>
// 							<h3><span className="font-semibold  text-lg">Titile</span> {product.title}</h3>
// 							<p><span className="font-semibold  text-lg">Desciption</span> {product.description}</p>
// 							<p><span className="font-semibold  text-lg">Price:</span> ${product.price}</p>
// 							<button onClick={()=> handleDelete(product.id)} className="bg-cyan-300 px-3 py-1">Delete</button>
// 							<button onClick={()=> setEditingProduct(product)} className="bg-cyan-300 px-3 py-1 ml-2">Edit</button>
// 						</div>
// 					))}
// 				</div>
// 			)}
// 			{editingProduct && <UpdateProduc product={editingProduct}></UpdateProduc>}
// 		</div>
// 	);
// };

// export default ProductView;
import { useState } from "react";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "../../services/productsApi";
import UpdateProduc from "./UpdateProduc";

const ProductView = () => {
  const {
    data: products,
    error,
    isLoading,
    refetch: refetchProducts, // Get the refetch method from the query
  } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductsMutation();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    refetchProducts(); // Refetch products after deleting one
  };

  const handleCloseUpdate = () => {
    setEditingProduct(null); // Close the update form
  };

  return (
    <div>
      <h1>Product List</h1>

      {isLoading && <p>loading.....</p>}
      {error && <p>Error hoise</p>}
      {!error && !isLoading && products && products.length > 0 && (
        <div className="grid grid-cols-4 gap-4 ">
          {products.map((product) => (
            <div
              className="bg-lime-200 shadow-lg p-4 border-2 border-yellow-200"
              key={product.id}
            >
              <h3>
                <span className="font-semibold text-lg">Title</span>{" "}
                {product.title}
              </h3>
              <p>
                <span className="font-semibold text-lg">Description</span>{" "}
                {product.description}
              </p>
              <p>
                <span className="font-semibold text-lg">Price:</span> $
                {product.price}
              </p>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-cyan-300 px-3 py-1"
              >
                Delete
              </button>
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-cyan-300 px-3 py-1 ml-2"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
      {editingProduct && (
        <UpdateProduc
          product={editingProduct}
          onClose={handleCloseUpdate} // Pass a function to close the form
          refetchProducts={refetchProducts} // Pass refetch method to update products
        />
      )}
    </div>
  );
};

export default ProductView;
