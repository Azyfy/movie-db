import axios from "axios"

import { movieTitles, showTitles, genre } from "../types"

function getTopRatedMovies() {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
  }

function getTopRatedShows() {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
}

function getMovieGenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}

function getShowGenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}

export const getTopRated = async () => {

    try {
        const [moviesResponse, showsResponse] = await Promise.all([ getTopRatedMovies(), getTopRatedShows() ]);
        
        const topMovies: [movieTitles] = moviesResponse.data.results.splice(0, 10)
        const topShows: [showTitles] = showsResponse.data.results.splice(0, 10)

        return {
            topMovies,
            topShows
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const getGenres = async () => {

    try {
        const [movieGenresResult, showGenresResult] = await Promise.all([ getMovieGenres(), getShowGenres()]);

        const movieGenres: [genre] = movieGenresResult.data.genres
        const showGenres: [genre] = showGenresResult.data.genres

        return {
            movieGenres,
            showGenres
        }
    }
    catch (err) {
        console.log(err)
    }

}

export const getTitle = async (id:number|string|undefined, type:string) => {

    try {
        const title = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`)

        console.log("TITLE", title.data)
        return title.data
    }
    catch (err) {
        console.log(err)
    }

}