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
        const titleResult = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`)
        const title: movieTitles | showTitles = titleResult.data

        return title
    }
    catch (err) {
        console.log(err)
    }
}

export const getSearchedTitle = async (type:string, searchTerm: string) => {

    try {
        const searchResults = await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=38ef25d4ae2b140a4f5b6f9c04144a95&query=${searchTerm}`)        
        const searchedTitles: [movieTitles | showTitles] = searchResults.data.results

        return searchedTitles
    }
    catch (err) {
        console.log(err)
    }

}