import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<div className="header">
						<div className="header__main-nav">
							<div className="header__link">
								<Link to="/login" >
									<p className="header__link-account"></p>
								</Link>
							</div>
							<div className="header__link">
								<Link to="/search" >
									<p className="header__link-search"></p>
								</Link>
							</div>
						</div>
						<Link to="/" >
							<div className="header__home-link">
								<h1 className="header__logo">Comic Collector</h1>
							</div>
						</Link>
					</div>
					<div className="header header--mini">
						<Link to="/" >
							<div className="header__home-link">
								<h2 className="header__mini-logo">Comic Collector</h2>
							</div>
						</Link>
						<div className="header__main-nav">
							<div className="header__link">
								<Link to="/login" >
									<p className="header__link-account"></p>
								</Link>
							</div>
							<div className="header__link">
								<Link to="/search" >
									<p className="header__link-search"></p>
								</Link>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}