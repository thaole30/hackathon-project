import * as types from "./appActionTypes";


export const openDrawer = () => {
    return {
        type: types.OPEN_DRAWER
    }
}
export const closeDrawer = () => ({
    type: types.CLOSE_DRAWER
})

export const searchProjectsByKeyword = (keyword) => ({
    type: types.SEARCH_PROJECTS_BY_KEYWORD,
    payload: keyword,
})
export const searchProjectsByCategory = (category) => ({
    type: types.SEARCH_PROJECTS_BY_CATEGORY,
    payload: category,
})

export const searchProjectsByTag = (tag) => ({
    type: types.SEARCH_PROJECTS_BY_TAG,
    payload: tag,
})

export const startFetchProjectDetail = () => ({
    type: types.START_FETCH_PROJECT_DETAIL,
})
export const successFetchProjectDetail = (projectId) => ({
    type: types.SUCCESS_FETCH_PROJECT_DETAIL,
    payload: projectId,
})
export const failFetchProjectDetail = () => ({
    type: types.FAIL_FETCH_PROJECT_DETAIL,
})