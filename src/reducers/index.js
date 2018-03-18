import { combineReducers } from "redux";
import ComicReducer from "./reducer_comic";
import SearchReducer from "./reducer_search";

const rootReducer = combineReducers({
	results: SearchReducer,
	comic: ComicReducer
});

export default rootReducer;
