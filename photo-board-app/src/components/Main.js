import React, { useState, useEffect } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {
	BrowserRouter,
	Route,
	withRouter,
	Link,
	Switch,
} from 'react-router-dom';

const Main = ({ history, posts, removePicture, addPicture, ...props }) => {
	return (
		<>
			<h1 className="font-face">
				<Link to="/">Photowall</Link>
			</h1>
			<BrowserRouter>
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<PhotoWall
								posts={posts}
								removePicture={removePicture}
								{...props}
							/>
						)}
					/>
					<Route
						path="/AddPhoto"
						exaxct
						render={(props) => (
							<AddPhoto posts={posts} addPicture={addPicture} {...props} />
						)}
					/>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default withRouter(Main);
