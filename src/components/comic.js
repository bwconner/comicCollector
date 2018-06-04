import React, { Component } from 'react';

export default class Comic extends Component {
	constructor(props) {
		super(props);
	}

	addToCollection(comicId) {
		console.log(comicId);
	}

	addToWishlist(comicId) {
		console.log(comicId);
	}

	render() {

		const {comicId, comicTitle, comicImage} = this.props;

		return (
				<div className={`search-result comic-${comicId}`} data-title={comicTitle} data-image={comicImage}>
					<img className="result-img" src={comicImage}/>
					<div className="result-information">
						<div className="result-title">{comicTitle}</div>
						<div className="result-creators"></div>
						<div className="comic__add-to-collection button" onClick={this.addToCollection(comicId)}>Add to Collection</div>
						<div className="comic__add-to-wishlist button" onClick={this.addToCollection(comicId)}>Add to Wishlist</div>
						<div className="result__added-succesfully hide">Added Successfully!</div>
						<a href={`/comiccollector/pages/viewcomicinfo?&comicId=${comicId}`}>View Full Information</a>
					</div>
				</div>
		);
	}
}

