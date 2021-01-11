import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const PictureDetail = (props) => {
	const { match, posts, addComment, comments, removePicture, history } = props;
	const id = match.params.paramsId;
	const pictureComments = comments[id];

	const post = posts.find((post) => post.id === id);
	const idx = posts.findIndex((post) => post.id === id);

	return (
		<div className="single-photo">
			<Photo
				post={post}
				removePicture={removePicture}
				history={history}
				i={idx}
			/>
			<Comments
				addComment={addComment}
				pictureComments={pictureComments}
				id={id}
			/>
		</div>
	);
};

export default PictureDetail;
