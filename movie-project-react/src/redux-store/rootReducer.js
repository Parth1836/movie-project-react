import { combineReducers } from "redux";
import movieSlice from "./slices/movieSlice";


const rootReducer = combineReducers({
    moviesData: movieSlice,
});

export default rootReducer;