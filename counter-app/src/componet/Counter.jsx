import { useDispatch, useSelector } from "react-redux";
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from "../services/actions/counterActions";

const Counter = () => {
	const count = useSelector((state) => state.count)
	const dispatch = useDispatch()
	const handleIncrement = () =>{
		dispatch(incrementCounterAction())
	}
	const handleDecrement = () => {
		dispatch(decrementCounterAction())
	}
	const handleReset = () =>{
		dispatch(resetCounterAction())
	}

  
	return (
		<div>
			   <div className="flex flex-col justify-center items-center bg-blue-50 border shadow-xl w-1/2 mx-auto py-5">
     <p className="my-4 text-lg"><span className="font-bold">Count: </span>{count}</p>
      <div className="">
        <button className="bg-lime-200 px-4 py-1 mr-2" onClick={handleIncrement}>Increment</button>
        <button className="bg-lime-200 px-4 py-1 mr-2" onClick={handleDecrement}>Decrement</button>
        <button className="bg-lime-200 px-4 py-1" onClick={handleReset}>Reset</button>
      </div>
     </div>
		</div>
	);
};

export default Counter;