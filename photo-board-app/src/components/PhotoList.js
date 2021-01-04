import React from 'react';
import PhotoCard from './PhotoCard'

const PhotoList = ({ posts }) => posts.map((post, i) => <PhotoCard post={post} key={i} />);


export default PhotoList;