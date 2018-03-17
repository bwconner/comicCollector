import React, { Component } from 'react';

export default class Comic extends Component {
	render() {
		return (
			<div className="search-result comic-{{comicId}}" data-title="{{title}}" data-image="{{image}}">
				<img className="result-img" src="{{image}}"/>
				<div className="result-information">
					<div className="result-title">{{title}}</div>
					<div className="result-creators"></div>
					<div className="comic__add-to-collection button" data-comicid="{{comicId}}">Add to Collection</div>
					<div className="comic__add-to-wishlist button" data-comicid="{{comicId}}">Add to Collection</div>
					<div className="result__added-succesfully hide">Added Successfully!</div>
					<a href="/comiccollector/pages/viewcomicinfo?&comicId={{comicId}}">View Full Information</a>
				</div>
			</div>
		);
	}
}