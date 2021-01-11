import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const PictureDetail = (props) => {
	const { match, posts, addComment, comments } = props;
	const postId = match.params.postId;

	const post = posts.find((post) => post.id === postId);

	return (
		<div className="single-photo">
			<Photo post={post} />
			<Comments addComment={addComment} comments={comments} />
		</div>
	);
};

export default PictureDetail;
