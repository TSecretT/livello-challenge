import { combineReducers } from "redux";

const reducerMovies = (state: any = [], action: any) => {
    switch (action.type){   
        case "set_movies":
            return state = action.movies;
        default:
            return state;
    }
};

const reducerMovie = (state: any = null, action: any) => {
    switch (action.type){   
        case "set_movie":
            return state = action.movie;
        case "clear_movie":
            return state = null;
        default:
            return state;
    }
};

const reducers = combineReducers({
    movies: reducerMovies,
    selectedMovie: reducerMovie
})

export default reducers;