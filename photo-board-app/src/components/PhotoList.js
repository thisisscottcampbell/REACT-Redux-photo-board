import React from 'react';
import { Link } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import PropTypes from 'prop-types';

const PhotoList = ({ posts, ...props }) => {
	const AllPhotoCards = posts.map((post, i) => (
		<PhotoCard post={post} key={i} idx={i} {...props} />
	));

	return (
		<div>
			<Link className="addIcon" to="/AddPhoto"></Link>
			<div className="photoGrid">
				<div className="photoGrid">{AllPhotoCards}</div>
			</div>
		</div>
	);
};

PhotoList.propTypes = {
	posts: PropTypes.array.isRequired,
	//removePhoto: PropTypes.func.isRequired,
};

export default PhotoList;
