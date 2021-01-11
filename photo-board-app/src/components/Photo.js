import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ post, i, removePicture, ...props }) => {
	const handleClick = () => {
		props.history.push('/');
		removePicture(i);
	};

	return (
		<figure className="figure">
			<Link to={`/detail/${post.id}`}>
				<img className="photo" src={post.imageLink} alt={post.description} />
			</Link>
			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className="button-container">
				<button className="remove_button" onClick={handleClick}>
					Remove
				</button>
			</div>
		</figure>
	);
};

export default Photo;
