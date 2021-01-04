import React, { useState, useEffect } from 'react';
import Title from './Title';
import PhotoList from './PhotoList';
import AddPhoto from './AddPhoto';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import simulateFetch from '../util/simulateFetch';
import dummyPosts from '../util/posts';

const Main = ({ history, posts }) => {
	const [currPosts, setPosts] = useState(posts);
	const [newPost, setNewPost] = useState(false);

	const removePhoto = ({ id }) => {
		const newList = currPosts.filter((post) => post.id !== id);

		setPosts(newList);
	};

	const addPhoto = (post) => {
		dummyPosts.push(post);
		setNewPost(true);
	};

	//cdm ue
	useEffect(() => setPosts(simulateFetch()), []);

	//new post ue
	useEffect(() => {
		if (!newPost) return;

		const sortPostsByMostRecent = simulateFetch().sort(
			(a, b) => b.timestamp - a.timestamp
		);

		setPosts(sortPostsByMostRecent);
		setNewPost(false);
	}, [newPost]);

	//list was updated ue
	useEffect(() => history.push('/'), [currPosts]);

	return (
		<BrowserRouter>
			<Route
				path="/"
				exact
				render={() => (
					<div>
						<Title title={'Photowall'} />
						<PhotoList removePhoto={removePhoto} posts={currPosts} />
					</div>
				)}
			/>
			<Route
				path="/AddPhoto"
				exaxct
				render={(props) => <AddPhoto addPhoto={addPhoto} {...props} />}
			/>
		</BrowserRouter>
	);
};

export default withRouter(Main);
