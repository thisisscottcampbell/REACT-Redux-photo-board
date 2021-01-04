import React from 'react';

const PhotoCard = ({ post, idx, removePhoto }) => {
	return (
		<div className="photoGrid">
			<figure className="figure">
				<img className="photo" src={post.imageLink} alt={post.description} />
				<figcaption>
					<p>{post.description}</p>
				</figcaption>
				<div className="button-container">
					<button className="remove_button" onClick={() => removePhoto(post)}>
						Remove
					</button>
				</div>
			</figure>
		</div>
	);
};

PhotoCard.propTypes = {};

export default PhotoCard;
