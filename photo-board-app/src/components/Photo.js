import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ post, i, removePicture, ...props }) => {
	const handleClick = () => {
		removePicture(i);
		props.history.push('/');
	};

	const postId = post.id;

	return (
		<figure className="figure">
			<Link to={`/detail/${postId}`}>
				<img className="photo" src={post.imageLink} alt={post.description} />
			</Link>
			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className="button-container">
				<button className="remove_button" onClick={handleClick}>
					Remove
				</button>
				{/* <Link className="button" to={`/single/${postId}`}>
					<div className="comment-count">
						<div className="speech-bubble"> </div>
						{props.comments[post.id] ? props.comments[post.id].length : 0}
					</div>
				</Link> */}
			</div>
		</figure>
	);
};

export default Photo;
