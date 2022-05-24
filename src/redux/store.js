import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import hackathonReducer from './hackathonSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        hackathon: hackathonReducer,
    },
})