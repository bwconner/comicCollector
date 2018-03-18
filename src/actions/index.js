import axios from 'axios';

export const FETCH_COMIC = "FETCH_COMIC";
export const FETCH_COMICS = "FETCH_COMICS";

const ROOT_URL = "https://gateway.marvel.com:443/v1/public/comics?";
const API_KEY = "&apikey=a650a42e507ca3ac3099fb988c201be2";

export function fetchComic(comicId, callback) {
	const request = axios.get(`${ROOT_URL}${comicId}${API_KEY}`).then((response) => callback(response.data.data.results));

	return {
		type: FETCH_COMIC,
		payload: request
	};
}

export function fetchComics(term, callback) {
	const request = axios.get(`${ROOT_URL}titleStartsWith=${term}${API_KEY}`).then((response) => callback(response.data.data.results));
	console.log(`${ROOT_URL}titleStartsWith=${term}${API_KEY}`);
	return {
		type: FETCH_COMICS,
		payload: request
	};
}
