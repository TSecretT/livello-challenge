const selectMovies = (movies: any[]) => {
    return (dispatch: any) => {
        dispatch({
            type: "set_movies",
            movies
        })
    }
}

const selectMovie = (movie: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "set_movie",
            movie
        })
    }
}

export default {
    selectMovies,
    selectMovie
}