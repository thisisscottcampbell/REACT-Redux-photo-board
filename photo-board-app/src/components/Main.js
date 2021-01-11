import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PhotoWall from '../components/PhotoWall';
import AddPost from '../components/AddPost';
import PictureDetail from './PictureDetail';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<h1 className="font-face">
					<Link to="/">Photowall</Link>
				</h1>
				<Switch>
					<Route
						exact
						path="/"
						render={(params) => <PhotoWall {...this.props} {...params} />}
					/>
					<Route
						path="/AddPost"
						render={(params) => <AddPost {...this.props} {...params} />}
					/>
					<Route
						path="/detail/:postId"
						render={(params) => <PictureDetail {...this.props} {...params} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default Main;
