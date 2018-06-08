import React, { Component } from 'react';
import LoginForm from "</src/components/login-form";
import CreateAccountForm from "</src/components/create-account-form";

export default class Account extends Component {
	render() {
		return (
			<div className="site-body-wrapper">
				<LoginForm/>
				<div className="create-account-wrapper">
					<div className="create-account-wrapper_form">
						<div className="section-header">Create An Account</div>
						<form className="create-account-form" id="create-account-form" method="post" action="">
							<p className="input-label">Username:</p>
							<input id="username" type="text" name="username" className="username" placeholder="Enter a User Name"/>
							<p className="error username-error hide">Please enter a user name between 3 and 16 characters long.</p>
							<p className="input-label">Password:</p>
							<input id="password" type="text" name="password" className="password" placeholder="Enter a Password"/>
							<p className="error password-error hide">Please enter a user name between 8 and 16 characters long. Your password must contain at least one letter, one number and one special character.</p>
							<p className="input-label">E-Mail:</p>
							<input id="email" type="text" name="email" className="email" placeholder="Enter an E-Mail"/>
							<p className="error email-error hide">Please enter a valid e-mail address.</p>
						</form>
						<button className="create-account button">Create Account</button>
						<div className="create-account-wrapper_success hide">
							<p>You have succesfully created an account! Please <a href="/comiccollector/pages/myaccount.php">click here</a> to visit and further customize your profile.</p>
						</div>
					</div>
					<div className="create-account-wrapper_benefits">
						<div className="section-header">Benefits of an account:</div>
						<div className="create-account-section">
							<ul>
								<li>
									Connect with friends.
								</li>
								<li>
									Manage your collection.
								</li>
								<li>
									Add comics to your wishlist.
								</li>
								<li>
									Discover new reads.
								</li>
							</ul>
						</div>
					</div>
					<div className="create-account-wrapper_login">
						<p className="">Already have an account? </p><p className="click-to-login">Click here to login.</p>
					</div>
				</div>
			</div>
		);
	}
}