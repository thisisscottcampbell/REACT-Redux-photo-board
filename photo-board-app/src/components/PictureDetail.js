import React from 'react';
import Photo from './Photo';

const PictureDetail = (props) => {
	const { match, posts } = props;
	const postId = match.params.postId;

	const post = posts.find((post) => post.id === postId);

	console.log(post);

	return (
		<div className="single-photo">
			<Photo post={post} />
		</div>
	);
};

export default PictureDetail;
