//removePost is action creator
export function removePost(idx) {
	//the returned object is the action
	return {
		type: 'REMOVE_POST',
		payload: idx,
	};
}
