import dummyPosts from '../util/posts';

const postReducer = function posts(state = dummyPosts, action) {
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
};

export default postReducer;
