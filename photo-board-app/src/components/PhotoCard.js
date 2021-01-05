import React from 'react';

const PhotoCard = ({ post, dispatch, removePost }) => {
	return (
		<figure className="figure">
			<img className="photo" src={post.imageLink} alt={post.description} />
			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className="button-container">
				<button
					className="remove_button"
					onClick={() => dispatch(removePost(1))}
				>
					Remove
				</button>
			</div>
		</figure>
	);
};

PhotoCard.propTypes = {};

export default PhotoCard;
