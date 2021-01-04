import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import PhotoList from './components/PhotoList';
import dummyPosts from './util/posts';

const App = () => {
	const [posts, setPosts] = useState(dummyPosts);

	const removePhoto = ({ id, description, imageLink }) => {
		const newList = posts.filter(
			(post) =>
				post.id !== id &&
				post.description !== description &&
				post.imageLink !== imageLink
		);

		setPosts(newList);
	};
	return (
		<div>
			<Title title={'Photowall'} />
			<PhotoList removePhoto={removePhoto} posts={posts} />
		</div>
	);
};

export default App;
