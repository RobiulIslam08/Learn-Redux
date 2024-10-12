import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "productsApi", // reducer িএর নাম
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3008/"}),  // যেই adress এ request করবো সেটা দিতে হবে
	tagTypes: ['product'],
	endpoints: (builder) => ({ // base url এর যেটা থাকবে সেটা endpoints
		getProducts: builder.query({ // getProducts এখা েন যেকোন নাম দেওয়া যাবে। 
			query: () => 'products',// কোন endpoints এ আমি api টা hit করতে চাচ্ছি সেটা। যেহেতু endpiont এ ‘ / ‘ আছে তােই এখানে আর দেইনাই
			
			providesTags: (results) => {
				return results ? [
					...results.map(({ id }) => ({ type: 'product', id })),
					{ type: 'product', id: 'LIST' }
				] : [
					{ type: 'product', id: 'LIST' }
				];
			}
		}),
		deleteProducts: builder.mutation({
			query: (id) => ({
				url: `products/${id}`, // Fix the key 'url' and set the correct endpoint
				method: 'DELETE',
			}),
			invalidatesTags: (results, error, id) => [{
				type: 'product',
				id
			}]
		}),
		addProducts: builder.mutation({
			query: (body) => ({ // body  এর ভিতর ডাটা গুলো আসবে
				url: 'products/', // Fix the key 'url' and set the correct endpoint
				method: 'POST',
				body
			}),
			invalidatesTags: [{
				type: 'product',
				id: 'LIST'
			}]
		}),
		updateProducts: builder.mutation({
			query: ({id,updatedProduct}) => ({
				url: `products/${id}`, // Fix the key 'url' and set the correct endpoint
				method: 'PUT',
				body: updatedProduct
			}),
			invalidatesTags: (results, error, id) => [{
				type: 'product',
				id
			}]
		}),
	})
})

export const {useGetProductsQuery, useDeleteProductsMutation, useAddProductsMutation, useUpdateProductsMutation} = productsApi