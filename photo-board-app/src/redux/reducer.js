import dummyPosts from '../util/posts';
import { combineReducers } from 'redux';

function comments(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [...state, action.comment];
		default:
			return state;
	}
	return state;
}

function posts(state = dummyPosts, action) {
	switch (action.type) {
		case 'REMOVE_PICTURE':
			return [
				...state.slice(0, action.payload),
				...state.slice(action.payload + 1),
			];
		case 'ADD_PICTURE':
			return [
				{
					id: action.id,
					imageLink: action.imageLink,
					description: action.description,
				},
				...state,
			];
		default:
			return state;
	}
}

const rootReducer = combineReducers({ posts, comments });
export default rootReducer;
