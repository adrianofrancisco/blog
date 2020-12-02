import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Post from './pages/post';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Post} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;