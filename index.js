const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = "RESET"
//for payload
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'


//  প্রথমে state initialize করতে হবে
// state

const initialCounterState ={
	count: 0,
}


// action - object = type, payload
const incrementCounterAction = () =>{
	return {
		type: INCREMENT,
	}
}
const decrementCounterAction = () =>{
	return {
		type: DECREMENT
	}
}
const resetCounterAction = () =>{
	return {
		type: RESET
	}
}
//for payload
const incrementCounterByValue = (value) => {
	return {
		type: INCREMENT_BY_VALUE,
		payload: value,
	}
}

// create reducer for counter

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
		//for payload
		case INCREMENT_BY_VALUE:
			return {
				...state,
				count: state.count + action.payload
			}
		default:
			 state
	}
}


                         //store
// এখানে যা করা হয়েছে- 
//create store
const store = createStore(counterReducer)

store.subscribe(()=>{
	console.log(store.getState())
})

//action dispatch

store.dispatch(incrementCounterByValue(20))
store.dispatch(incrementCounterByValue(10))