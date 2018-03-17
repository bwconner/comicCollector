import React, { Component } from 'react';

export default class Profile extends Component {
	render() {
		return (
			<div className="site-body-wrapper">
				<div className="profile">
					<div className="profile__image-wrapper">
						<img className="profile__image" src="" alt=""/>
					</div>
					<div className="profile__information">
						<p className="profile__username"></p>

						<p className="profile__label">First Name:</p>
						<p className="profile__first-name"></p>

						<p className="profile__label">Favorite Character:</p>
						<p className="profile__favorite-character"></p>

						<p className="profile__label"></p>
						<p className="profile__user-description"></p>
					</div>
				</div>
			</div>
		);
	}
}