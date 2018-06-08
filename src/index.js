import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import App from './components/app';
import Header from './components/header';
import Search from './containers/search';
import LoginForm from './components/login-form';
import CreateAccount from './components/create-account-form';
import Signup from './containers/signup';
import Profile from './containers/profile';
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
						<Route path="/account" component={Profile} />
						<Route path="/profile" component={Profile} />
						<Route path="/user" component={Profile} />
						<Route path="/login" component={LoginForm} />\
						<Route path="/create-account" component={Signup} />
						<Route path="/signup" component={Signup} />
						<Route path="/collection" component={Collection} />
						<Route path="/wishlist" component={Wishlist} />
						<Route path="/search" component={Search} />
						<Route path="/" component={App} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	</Provider>
, document.querySelector('.container'));
