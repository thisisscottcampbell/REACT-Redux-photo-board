export function addPicture(id, imageLink, description) {
	return {
		type: 'ADD_PICTURE',

		id,
		imageLink,
		description,
	};
}

export function removePicture(i) {
	return {
		type: 'REMOVE_PICTURE',
		payload: i,
	};
}

export function addComment(comment, postId) {
	return {
		type: 'ADD_COMMENT',
		comment,
		postId,
	};
}
