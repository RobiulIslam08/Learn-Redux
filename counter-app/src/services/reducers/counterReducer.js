// 3. reducers = incerment=> count = count + 1
//               decrement => count = count - 1
//               reset => count =0

import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

let initialCounterState ={
	count: 0,
}

const counterReducer = (state=initialCounterState, action) =>{
	switch(action.type){
		case INCREMENT:
			return {			
				// ...state multipul state এর ক্ষেত্রে আমরা spread করে নিতে পারি।  তারপর যে state নিয়ে কাজ করবো সেটা define করে দিবো
				...state,
				count: state.count + 1 
			};
		case DECREMENT:
			return {			
				// ...state multipul state এর ক্ষেত্রে আমরা spread করে নিতে পারি।  তারপর যে state নিয়ে কাজ করবো সেটা define করে দিবো
				...state,
				count: state.count - 1 
			};
		case RESET:
			return {
				...state,
				count: 0
			};
		
		default:
			return state
	}
}

export default counterReducer