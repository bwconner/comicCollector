import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import App from './components/app';
import Header from './components/header';
import Search from './containers/search';
import Login from './containers/login';
import Signup from './containers/signup';
import Profile from './containers/profile';
import Account from './containers/account';
import Collection from './containers/collection';
import Wishlist from './containers/wishlist';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<BrowserRouter >
				<div>
					<Header />
					<Switch>
						<Route path="/account" component={Account} />
						<Route path="/profile" component={Profile} />
						<Route path="/user" component={Profile} />
						<Route path="/collection" component={Collection} />
						<Route path="/wishlist" component={Wishlist} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/search" component={Search} />
						<Route path="/" component={App} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	</Provider>
, document.querySelector('.container'));
