import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoWall = ({ posts, removePicture, ...props }) => {
	const AllPhotos = posts
		.sort((a, b) => b.timestamp - a.timestamp)
		.map((post, i) => (
			<Photo
				post={post}
				i={i}
				key={i}
				removePicture={removePicture}
				{...props}
			/>
		));

	return (
		<div>
			<Link className="addIcon" to="/AddPhoto"></Link>
			<div className="photoGrid">
				<div className="photoGrid">{AllPhotos}</div>
			</div>
		</div>
	);
};

PhotoWall.propTypes = {
	posts: PropTypes.array.isRequired,
	// 	removePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
