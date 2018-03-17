import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<div className="header">
						<div className="header__main-nav">
							<div className="header__link">
								<a className="header__link-account" href="/comiccollector/pages/createaccount.php"></a>
							</div>
							<div className="header__link">
								<a className="header__link-search" href="/comiccollector/pages/search.php"></a>
							</div>
						</div>
						<a className="header__home-link"><h1 className="header__logo">Comic Collector</h1></a>
					</div>
					<div className="header header--mini">
						<a className="header__home-link"><h2 className="header__mini-logo">Comic Collector</h2></a>
						<div className="header__main-nav">
							<div className="header__link">
								<a className="header__link-account"></a>
							</div>
							<div className="header__link">
								<a className="header__link-search"></a>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}