import { FILTER_BY_HACKATHON_TITLE, FILTER_BY_POPULAR_TAGS, FILTER_BY_STATUS, FILTER_BY_HOST } from "./hackathonActionType";

const hackathonReducer = (state, action) => {
    switch (action.type) {
        case FILTER_BY_HACKATHON_TITLE : {
            const filteredHackathons = state.filteredHackathons.filter((item) => {
                return item.title.toLowerCase().includes(action.payload.toLowerCase())
            });
            return {
                ...state,
                searchValue: action.payload.toLowerCase(),
                filteredHackathons,
            }
        }

        case FILTER_BY_POPULAR_TAGS: {
            console.log("popular tag ACTION", action.payload)

            const popularTags = state.popularTags.map((tag) => tag.label === action.payload ? {...tag, isSelected: !tag.isSelected} : tag)

            const filteredHackathons = state.filteredHackathons.filter((item) => {
                const selectedTags = popularTags.filter(tag => tag.isSelected);
                return selectedTags.every(tag => item.tags.includes(tag.label))
             })

            return {
                ...state,
                popularTags,
                filteredHackathons,
            }
        }
        
        case FILTER_BY_STATUS: {
            console.log("status action", action);
            // console.log("filer result hackathons", state.filteredHackathons.filter((item) => item.status === action.payload)); 
            let filteredHackathons;
            if(
                state.searchValue === "" && state.popularTags.every((tag) => !tag.isSelected) 
            ){
                filteredHackathons = action.payload === "all" ? state.fullHackathons : state.fullHackathons.filter((item) => item.status === action.payload);
            } else {
                filteredHackathons = action.payload === "all" ? state.filteredHackathons : state.filteredHackathons.filter((item) => item.status === action.payload);
            }
            return {
                ...state,
                statuses: state.statuses.map((status) => status.value === action.payload ? {...status, isSelected: true} : {...status, isSelected: false}),
                filteredHackathons,
            }
        }

        case FILTER_BY_HOST: {
            
            return {
                ...state,
                filteredHackathons: state.filteredHackathons.filter((item) => item.owner === action.payload)
            }
        }

        default:
            return state
    }
}


export default hackathonReducer;