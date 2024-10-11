import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "productsApi", // reducer িএর নাম
	baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/"}),  // যেই adress এ request করবো সেটা দিতে হবে
	endpoints: (builder) => ({ // base url এর যেটা থাকবে সেটা endpoints
		getProducts: builder.query({ // getProducts এখা েন যেকোন নাম দেওয়া যাবে। 
			query: () => 'products'// কোন endpoints এ আমি api টা hit করতে চাচ্ছি সেটা। যেহেতু endpiont এ ‘ / ‘ আছে তােই এখানে আর দেইনাই
		})
	})
})

export const {useGetProductsQuery} = productsApi