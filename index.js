const INCREMENT = INCREMENT;
const DECREMENT = DECREMENT;


//  প্রথমে state initialize করতে হবে
// state
const initialCounterState ={
	count: 0,
}


// action - object = type, payload
const incrementCounter = () =>{
	return {
		type: INCREMENT,
	}
}
const decrementCounter = () =>{
	return {
		type: DECREMENT
	}
}


// create reducer for counter

const counterReducer = (state=  initialCounterState, action) =>{
	switch(action.type){
		case INCREMENT:
			return {
				...state
				// ...state multipul state এর ক্ষেত্রে আমরা spread করে নিতে পারি।  তারপর যে state নিয়ে কাজ করবো সেটা define করে দিবো 
			}
	}
}