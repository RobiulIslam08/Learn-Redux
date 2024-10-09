
import axios from "axios";

// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=> {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return res.data
})
export const postSlice = createSlice({
	name: "posts",
	initialState: {
		isLoading: false,
		error: null,
		posts: []
	}, 
	// আমরা এখানে extraReducer user করেছি কারন এখানে dispatch করবো এবং create করবো async function. তাই ্আমারা এখানে 
	extraReducers: (builder) =>{
		builder.addCase(fetchPosts.pending, (state)=> { 
			state.isLoading = true;
		})
		builder.addCase(fetchPosts.fulfilled, (state, action)=> { 
			state.isLoading = false;
			state.posts = action.payload;
		})
		builder.addCase(fetchPosts.rejected, (state, action)=> { 
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		})
	}
})
export default postSlice.reducer