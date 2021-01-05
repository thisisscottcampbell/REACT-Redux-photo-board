import dummyPosts from '../util/posts';

const postReducer = function posts(state = dummyPosts, action) {
	//remove photo action
	console.log('i am action', action);

	console.log(action.type === 'REMOVE_POST');

	switch (action.type) {
		case 'REMOVE_POST':
			return [];
		default:
			return state;
	}
};

export default postReducer;
