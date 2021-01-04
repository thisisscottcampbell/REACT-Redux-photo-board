import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
