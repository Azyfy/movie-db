import { getTopRated, getGenres, getSearchedTitle } from "../../services/moviedb"
import { state, genre, movieTitles, showTitles } from "../../types"

const reducer = ( state: state | undefined, action: { type: string; data: any}) => {
  switch (action.type) {
    case "INITIALIZE_TOP_RATED":
      const topRated = action.data

      return {
        ...state,
        topRated
      }
    case "INITIALIZE_GENRES":
      const genres = action.data

      return {
        ...state,
        genres
      }
    case "INITIALIZE_SEARCH_RESULTS":
      const searchResults = action.data

      return {
        ...state,
        searchResults
      }
    case "CLEAR_SEARCH_RESULTS":
      const clearResults = action.data

      return {
        ...state,
        searchResults: clearResults 
      }
    default:
      return state
  }
}

export const initializeTopRated = () => {
  return async (dispatch: (arg0: { type: string; data: { topMovies: [movieTitles]; topShows: [showTitles] } | undefined }) => void) => {
    const topRated = await getTopRated()
    dispatch({
      type: "INITIALIZE_TOP_RATED",
      data: topRated
    })
  }
}

export const initializeGenres = () => {
  return async (dispatch: (arg0: { type: string; data: { movieGenres: [genre]; showGenres: [genre] } | undefined }) => void) => {
    const genres = await getGenres()
    dispatch({
      type: "INITIALIZE_GENRES",
      data: genres
    })
  }
}

export const initializeSearchResults = (type:string, searchTerm: string) => {
  return async (dispatch: (arg0: { type: string; data: [movieTitles | showTitles] | undefined }) => void) => {
    const searchResults = await getSearchedTitle(type, searchTerm)
    dispatch({
      type: "INITIALIZE_SEARCH_RESULTS",
      data: searchResults
    })
  }
}

export const clearSearchResults = () => {
  return async (dispatch: (arg0: { type: string; data: null }) => void) => {
    const searchResults = null
    dispatch({
      type: "CLEAR_SEARCH_RESULTS",
      data: searchResults
    })
  }
}

export default reducer