import React, { Component } from 'react';
import LoginForm from "../components/login-form";
import CreateAccountForm from "../components/create-account-form";

export default class AccountContainer extends Component {
	render() {
		return (
			<div className="site-body-wrapper">
				<LoginForm/>
				<CreateAccountForm/>
			</div>
		);
	}
}