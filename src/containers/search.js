import React, { Component } from 'react';
import Comic from '../components/comic';

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			showSpinner: "hide",
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
		//Send Ajax
		//renderSearchResults with returned comics
	}

	renderSearchResults() {
		//Use Comic component to render search results
		//this.setState({showSpinner: "hide"});
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
					<div className="results"></div>
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