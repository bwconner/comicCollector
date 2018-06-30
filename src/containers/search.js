import React, { Component } from 'react';
import Search from '../components/search';
import {connect} from 'react-redux';
import {fetchComics} from "../actions";

class SearchContainer extends Component {


}

function mapStateToProps(state) {
	return {results: state.results};
}

export default connect(mapStateToProps, {fetchComics})(Search);