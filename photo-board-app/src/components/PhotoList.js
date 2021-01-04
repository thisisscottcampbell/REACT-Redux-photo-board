import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = ({ posts, removePhoto }) =>
	posts.map((post, i) => (
		<PhotoCard post={post} removePhoto={removePhoto} key={i} />
	));

export default PhotoList;
