import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="site-body-wrapper">
				<div className="login-account-wrapper">
					<div className="login-account-wrapper_form">
						<div className="section-header">Login</div>
						<div className="login-wrapper">
							<form className="login-form" id="login-form" method="post" action="">
								<p className="input-label">Username:</p>
								<input id="login-username" type="text" name="username" className="username" placeholder="User Name:"/>
								<p className="input-label">Password:</p>
								<input id="login-password" type="password" name="password" className="password" placeholder="Password:"/>
								<p className="error login-error hide">Please enter valid login credentials.</p>
							</form>
							<button className="login button">Login</button>
						</div>
					</div>
					<div className="login-account-wrapper_benefits">
						<div className="login-account-section">
							<img src="../images/thecollectorMCU.png"/>
						</div>
					</div>
					<div className="login-account-wrapper_create-account">
						<p className="">Need an account? </p>
						<Link to="/signup" >
							<p className="click-to-create">Click here to create an account.</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		
	};
}