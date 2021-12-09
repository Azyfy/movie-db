import axios from "axios"

function getTopRatedMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
  }

function getTopRatedShows() {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
}

function getMovieGenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
}

function getShowGenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
}

export const getTopRated = async () => {

    try {
        const [topMovies, topShows] = await Promise.all([ getTopRatedMovies(), getTopRatedShows() ]);
        
        return {
            topMovies: topMovies.data.results,
            topShows: topShows.data.results
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const getGenres = async () => {

    try {
        const [movieGenres, showGenres] = await Promise.all([ getMovieGenres(), getShowGenres()]);

        console.log(movieGenres)
        return {
            movieGenres: movieGenres.data.genres,
            showGenres: showGenres.data.genres
        }
    }
    catch (err) {
        console.log(err)
    }

}