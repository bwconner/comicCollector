export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const IMAGE_SELECTED = "IMAGE_SELECTED";
export const VIDEO_SELECTED = "VIDEO_SELECTED";


export function updateTerm(term) {	
	//A search has been completed, need to return list of pictures and videos
	return {
		type: UPDATE_SEARCH,
		payload: term
	};
}

export function selectImage(image) {	
	return {
		type: IMAGE_SELECTED,
		payload: image
	};
}

export function selectVideo(video) {	
	return {
		type: VIDEO_SELECTED,
		payload: video
	};
}