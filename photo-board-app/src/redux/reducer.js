import dummyPosts from '../util/posts';

const postReducer = function posts(state = dummyPosts, action) {
	//remove photo action
	console.log('i am action payload:', action.payload);
	return state;
};

export default postReducer;
