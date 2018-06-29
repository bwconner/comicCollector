import {FETCH_COMICS} from "../actions";
import {} from "../actions";

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_COMICS:
			return {...state, results: action.payload.data};
		default:
			return state;
	}
}