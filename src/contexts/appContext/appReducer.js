import { projects } from "../../pages/ProjectPage/data/data";
import { CLOSE_DRAWER, FAIL_FETCH_PROJECT_DETAIL, OPEN_DRAWER, SEARCH_PROJECTS_BY_CATEGORY, SEARCH_PROJECTS_BY_KEYWORD, SEARCH_PROJECTS_BY_TAG, START_FETCH_PROJECT_DETAIL, SUCCESS_FETCH_PROJECT_DETAIL } from "./appActionTypes";

const appReducer = (state, action) => {
    switch (action.type) {

        case OPEN_DRAWER: {
            return {
                ...state,
                isDrawerOpen: true,
            }
        }

        case CLOSE_DRAWER: {
            return {
                ...state,
                isDrawerOpen: false,
            }
        }

        case SEARCH_PROJECTS_BY_KEYWORD: {
            const filteredProjects = state.projects
                                            .filter((project) => project.desc.toLowerCase().includes(action.payload.toLowerCase()))
                                            .filter((project) => state.selectedCategory === "" ? true : project.categories.includes(state.selectedCategory))
            console.log("filteredProjects", filteredProjects);
            return {
                ...state,
                projectKeyword: action.payload,
                filteredProjects,
            }
        }

        case SEARCH_PROJECTS_BY_CATEGORY: {
            const filteredProjects = state.projects
                                            .filter((project) => project.desc.toLowerCase().includes(state.projectKeyword.toLowerCase()))
                                            .filter((project) => project.categories.includes(action.payload))
            console.log("filteredProjects", filteredProjects);
            return {
                ...state,
                selectedCategory: action.payload,
                filteredProjects,
            }
        }

        case START_FETCH_PROJECT_DETAIL: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }

        case SUCCESS_FETCH_PROJECT_DETAIL: {
            console.log("projectId payload", action.payload);
            // let projectDetail;
            const proDetail = projects.find((item) => item.id == action.payload);
            // new Promise((res, rej) => {
            //     setTimeout(() => {
            //         console.log("proDetail", proDetail)
            //       res(proDetail);
            //     }, 2000);
            //   })
            //   .then((result) => {
            //     console.log("result", result)
            //     // projectDetail = result;
            //     return {
            //         ...state,
            //         projectDetail: {...result},
            //         isLoading :false,
            //         isError: false,

            //     }
            //   })
            return {
                ...state,
                projectDetail: proDetail,
                isLoading :false,
                isError: false,

            }
        }
        case FAIL_FETCH_PROJECT_DETAIL: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }

        default:
            return state;
    }
}


export default appReducer;