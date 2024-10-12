// /* eslint-disable react/prop-types */

// import { useState } from "react";
// import { useUpdateProductsMutation } from "../../services/productsApi";


// const UpdateProduc = ({ product }) => {
// 	const [updateProduct] = useUpdateProductsMutation()
// 	const [updatedProduct, setUpdatedProduct] = useState(product);
// 	  // Set initial product details when the component mounts
	  
	  
// 	const handleSubmit = async(event) => {
// 		event.preventDefault();
// 		console.log(updatedProduct)
// 		try {
// 			await updateProduct({id:product.id, updatedProduct})
// 			// onClose()
// 		} catch (error) {
// 			console.log('bro update korte giye to tmi error khaiso' , error)
// 		}
		
// 	}
	
// 	return (
// 		<div className=" ">
// 			<form className="flex gap-3 flex-col w-3/6" onSubmit={handleSubmit}>
//       <h2 className="text-2xl my-10">Edit Product</h2>
//       <input
// 	  className="border px-3 py-1 border-black"
//         type="text"
//         placeholder="Title"
//         value={updatedProduct.title}
//         onChange={(e) =>
//           setUpdatedProduct({ ...updatedProduct, title: e.target.value })
//         }
//       />
//       <input
// 	  className="border px-3 py-1 border-black"
//         placeholder="Description"
//         value={updatedProduct.description}
//         onChange={(e) =>
//           setUpdatedProduct({ ...updatedProduct, description: e.target.value })
//         }
//       />
//       <input
// 	  className="border px-3 py-1 border-black"
//         type="number"
//         placeholder="Price"
//         value={updatedProduct.price}
//         onChange={(e) =>
//           setUpdatedProduct({
//             ...updatedProduct,
//             price: parseFloat(e.target.value),
//           })
//         }
		
//       />
//       <button type="submit" className="bg-yellow-100 px-3 py-1">Save</button>
//       <button className="bg-pink-100 px-3 py-1" type="button" >
//         Cancel
//       </button>
//     </form>
// 		</div>
// 	);
// };

// export default UpdateProduc;
import { useState } from "react";
import { useUpdateProductsMutation } from "../../services/productsApi";

const UpdateProduc = ({ product, onClose, refetchProducts }) => {
  const [updateProduct] = useUpdateProductsMutation();
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProduct({ id: product.id, updatedProduct }).unwrap();
      // Trigger the refetch of the product list
      refetchProducts();
      // Close the form after updating
      onClose();
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  return (
    <div className=" ">
      <form className="flex gap-3 flex-col w-3/6" onSubmit={handleSubmit}>
        <h2 className="text-2xl my-10">Edit Product</h2>
        <input
          className="border px-3 py-1 border-black"
          type="text"
          placeholder="Title"
          value={updatedProduct.title}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, title: e.target.value })
          }
        />
        <input
          className="border px-3 py-1 border-black"
          placeholder="Description"
          value={updatedProduct.description}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              description: e.target.value,
            })
          }
        />
        <input
          className="border px-3 py-1 border-black"
          type="number"
          placeholder="Price"
          value={updatedProduct.price}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              price: parseFloat(e.target.value),
            })
          }
        />
        <button type="submit" className="bg-yellow-100 px-3 py-1">
          Save
        </button>
        <button
          className="bg-pink-100 px-3 py-1"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateProduc;
