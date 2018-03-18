import React, { Component } from 'react';
import Comic from '../components/comic';
import {connect} from 'react-redux';
import {fetchComics} from "../actions";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			showSpinner: "hide",
			results:[]
		};

		this.updateSearchTerm = this.updateSearchTerm.bind(this);
		this.initiateSearch = this.initiateSearch.bind(this);
		this.renderSearchResults = this.renderSearchResults.bind(this);
	}

	updateSearchTerm(event) {
		this.setState({searchTerm: event.target.value});
	}

	initiateSearch() {
		this.setState({showSpinner: ""});
		this.getSearchResults(this.state.searchTerm);
	}

	getSearchResults() {
		this.props.fetchComics(this.state.searchTerm, this.renderSearchResults);
	}

	renderSearchResults(response) {
		//Use Comic component to render search results
		//this.setState({results: response});
		//console.log(this.state);
		response.map(comic => {
			return (
				<div className="search-result comic-{comic.id}" data-title=">{comic.title}" data-image="{`${comic.images[0].path}.${comic.images[0].extension}`}">
					<img className="result-img" src="{`${comic.images[0].path}.${comic.images[0].extension}`}"/>
					<div className="result-information">
						<div className="result-title">{comic.title}</div>
						<div className="result-creators"></div>
						<div className="comic__add-to-collection button" data-comicid="{comic.id}">Add to Collection</div>
						<div className="comic__add-to-wishlist button" data-comicid="{comic.id}">Add to Collection</div>
						<div className="result__added-succesfully hide">Added Successfully!</div>
						<a href="/comiccollector/pages/viewcomicinfo?&comicId={comic.id}">View Full Information</a>
					</div>
				</div>
			);
		});

		this.setState({showSpinner: "hide"});
	}

	render() {
		return (
			<div className="site-body-wrapper">
				<div className="search-body-wrapper">
					<div className="search-form">
						<div className="search-form_field-set">
							<p className="search-form-description">
								Search for a title that starts with or matches:
							</p>
							<input 
								onChange={this.updateSearchTerm} 
								className="search-by-title" 
								placeholder="Enter a Title to Search"
								value={this.state.searchTerm}
							/>
						</div>
						<div className="search-form_field-set">
							<p className="search-form-description">
								And/Or
							</p>
						</div>
						<div className="search-form_field-set">
							<p className="search-form-description">
								Search by a character name that starts with or matches:
							</p>
							<input type="text" name="search-by-character" className="search-by-character" placeholder="Enter a Character to Search"/>
						</div>
						<button 
							className="search button" 
							onClick={this.initiateSearch}>
							Search
						</button>
						<div className="advanced-search-options-show"> Show Advanced Search Options </div>
						<div className="advanced-search-options-wrapper">
							<div className="advanced-search-option">
								<div className="dropdown-label">
									Number of results to show:
								</div>
								<select name="limit" className="search-limit advanced-search-option_dropdown">
									<option value="24">24</option>
									<option value="48">48</option>
									<option value="72">72</option>
									<option value="96">96</option>
								</select>
							</div>
							<div className="advanced-search-option">
								<div className="dropdown-label">Format:</div>
								<select name="format" className="format advanced-search-option_dropdown">
									<option value="">Choose a Format</option>
									<option value="comic">Comic</option>
									<option value="digital comic">Digital Comic</option>
									<option value="trade paperback">Trade Paperback</option>
									<option value="graphic novel">Graphic Novel</option>
								</select>
							</div>
							<div className="advanced-search-option">
								<div className="dropdown-label">Sort By:</div>
								<select name="sort" className="sort advanced-search-option_dropdown">
									<option value="">Choose a Sorting</option>
									<option value="onsaleDate">On Sale Date - Ascending</option>
									<option value="-onsaleDate">On Sale Date - Descending</option>
									<option value="issueNumber">Issue Number - Ascending</option>
									<option value="-issueNumber">Issue Number - Descending</option>
									<option value="title">Title - Ascending</option>
									<option value="-title">Title - Descending</option>
								</select>
							</div>
						</div>
					</div>
					<div className={`spinner ${this.state.showSpinner}`}></div>
					<div className="results">
					</div>
					<div className="pagination hide">
						<div className="prev button hide">
							Previous
						</div>
						<div className="pages">
						</div>
						<div className="next button">
							Next
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {results: state.results};
}

export default connect(mapStateToProps, {fetchComics})(Search);