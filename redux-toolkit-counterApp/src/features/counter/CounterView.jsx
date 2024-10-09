import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
	const count = useSelector((state) => (state.counter.count))
	const dispatch = useDispatch()
	return (

		<div className="lg:w-1/2 w-full mx-5 lg:mx-auto flex justify-center items-center flex-col bg-[#b3ffc0] shadow-md rounded-lg py-5 my-10">
			<p>Count: {count}</p>
			<div className="flex gap-2">
			<button className="bg-[#ff5db5] px-3 py-1 " onClick={()=> (dispatch(increment()))}>Increment</button>
			<button className="bg-[#ff5db5] px-3 py-1 " onClick={()=> (dispatch(decrement()))}>Decrement</button>
			<button className="bg-[#ff5db5] px-3 py-1 " onClick={()=> (dispatch(reset()))}>Reset</button>
			</div>

		</div>

	);
};

export default CounterView;