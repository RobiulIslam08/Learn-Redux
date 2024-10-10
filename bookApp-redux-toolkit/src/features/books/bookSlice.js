import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      author: "Robi",
      quantity: 5,
      price: 205,
      title: "chole aso alore pothe",
    },
    {
      id: 2,
      author: "Rahad",
      quantity: 10,
      price: 305,
      title: "next js crash course",
    },
    {
      id: 3,
      author: "Sadman",
      quantity: 12,
      price: 255,
      title: "Redux crash course",
    },
  ],
};
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
	deleteBook: (state, action) => {
		const id = action.payload;
		state.books = state.books.filter((book)=> book.id !== id)
	}
  },
});
export const {deleteBook} = bookSlice.actions
export default bookSlice.reducer;
