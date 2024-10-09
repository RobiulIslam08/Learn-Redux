import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";


const PostsView = () => {
	const {posts, error, isLoading} = useSelector((state)=> state.posts)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchPosts())
	},[])
	return (
		<div className="w-4/5 mx-auto">
			{isLoading && <div>loading....</div>}
			{error && <div>{error}</div>}
			{posts &&
				
					posts.map((post)=> <div className="border border-indigo-500 bg-[#ffddef] p-5" key={post.title}>
						<p>{post.title}</p>
						<p>{post.body}</p>
					</div>)
				
				}
		</div>
	);
};

export default PostsView;