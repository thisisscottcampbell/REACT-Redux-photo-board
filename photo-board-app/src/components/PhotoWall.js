import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoWall = ({ posts, ...props }) => {
	const AllPhotoCards = posts
		.sort((a, b) => a.id - b.id)
		.map((post, i) => <Photo post={post} key={i} i={i} {...props} />);

	return (
		<div>
			<Link className="addIcon" to="/AddPhoto"></Link>
			<div className="photoGrid">
				<div className="photoGrid">{AllPhotoCards}</div>
			</div>
		</div>
	);
};

PhotoWall.propTypes = {
	posts: PropTypes.array.isRequired,
	//removePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
