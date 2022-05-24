import * as types from "./hackathonActionType";

export const filterByTitle = (valueSearch) => {
    return {
        type: types.FILTER_BY_HACKATHON_TITLE,
        payload: valueSearch
    }
}

export const filterByPopularTags = (selectedTag) => {
    return {
        type: types.FILTER_BY_POPULAR_TAGS,
        payload: selectedTag
    }
}

export const filterByStatus = (status) => {
    console.log("status in action file", status);
    return { 
        type: types.FILTER_BY_STATUS, 
        payload: status,
    }
}

export const filterByHost = (host) => {
    return {
        type: types.FILTER_BY_HOST,
        payload: host
    }
}