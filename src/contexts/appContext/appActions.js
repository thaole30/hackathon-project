import * as types from "./appActionTypes";

//DRAWERRRRR

export const openDrawer = () => {
    return {
        type: types.OPEN_DRAWER
    }
}
export const closeDrawer = () => ({
    type: types.CLOSE_DRAWER
})

//PROJECTTTT

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


export const startFetchAllProjects = () => ({
    type: types.START_FETCH_ALL_PROJECTS,
})
export const successFetchAllProjects = (projects) => ({
    type: types.SUCCESS_FETCH_ALL_PROJECTS,
    payload: projects,
})
export const failFetchAllProjects = () => ({
    type: types.FAIL_FETCH_ALL_PROJECTS,
})

//LOADINGGGG


export const showLoading = () => ({
    type: types.SHOW_LOADING,
})

export const hideLoading = () => ({
    type: types.HIDE_LOADING,
})

// AUTHHHHHHHHHHH

export const logOut = () => ({
    type: types.LOG_OUT,
})

export const signIn = (userInfo) => ({
    type: types.SIGN_IN,
    payload: userInfo,
})


export const signUp = (userInfo) => ({
    type: types.SIGN_UP,
    payload: userInfo,
})