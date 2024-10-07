const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

//contants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILD = 'GET_TODOS_FAILD'
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
//state
const initialTodosState = {
	todos: [],
	isLoading: false,
	error: null,
}

//action
const getTodosRequest = () => {
	return {
		type: GET_TODOS_REQUEST,
	}
}
const getTodosSuccess = (todos) => {
	return {
		type: GET_TODOS_SUCCESS,
		payload: todos
	}
}
const getTodosFaild = (error) => {
	return {
		type: GET_TODOS_FAILD,
		payload: error
	}
}

//reducer
const todosReducer = (state=initialTodosState, action) => {
	switch (action.type) {
		case GET_TODOS_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case GET_TODOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				todos: action.payload
			}
		case GET_TODOS_FAILD:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
	
	
		default:
			return state;
	}
}

//async action crator 
const fetchData = () =>{
	return (dispatch) =>{
		dispatch(getTodosRequest())
		axios.get(TODOS_URL)
		.then(res => {
			const todos = res.data;
			const title = todos.map((todo)=> todo.title)
			dispatch(getTodosSuccess(title))
		})
		.catch((error)=>{
			const errorMessage = error.message;
			dispatch(getTodosFaild(errorMessage))
		})
	}
}


//store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(()=>{
	console.log(store.getState())
})

store.dispatch(fetchData())