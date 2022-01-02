import { getTopRated, getGenres, getSearchedTitle } from "../../services/moviedb"
import { state, action, genre, movieTitles, showTitles } from "../../types"

const initialState = {
  searchTerm: ""
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = ( state: state = initialState, action: action): any => {
  switch (action.type) {
    case "INITIALIZE_TOP_RATED": {
      const topRated = action.data

      return {
        ...state,
        topRated
      }
    }
    case "INITIALIZE_GENRES": {
      const genres = action.data

      return {
        ...state,
        genres
      }
    }
    case "INITIALIZE_SEARCH_RESULTS": {
      const searchResults = action.data

      return {
        ...state,
        searchResults
      }
    }
    case "CLEAR_SEARCH_RESULTS": {
      const clearResults = action.data

      return {
        ...state,
        searchResults: clearResults
      }
    }
    case "SET_SEARCH_TERM": {
      const searchTerm = action.data

      return {
        ...state,
        searchTerm
      }
    }
    case "ERROR": {
      const errorMessage = action.data

      return {
        ...state,
        errorMessage
      }
    }
    default:
      return state
  }
}

const handleError = (message: string) => {
   return {
     type: "ERROR",
     data: message
   }
}

export const initializeTopRated = () => {
  return async (dispatch: (arg0: { type: string; data: { topMovies: movieTitles[]; topShows: showTitles[] } | string | undefined }) => void) => {

    try {
      const topRated = await getTopRated()

      dispatch({
        type: "INITIALIZE_TOP_RATED",
        data: topRated
      })
    }// eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      dispatch(handleError(err.message))
    }

  }
}

export const initializeGenres = () => {
  return async (dispatch: (arg0: { type: string; data: { movieGenres: genre[]; showGenres: genre[] } | string | undefined }) => void) => {

    try {
      const genres = await getGenres()
      dispatch({
        type: "INITIALIZE_GENRES",
        data: genres
      })
    }// eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      dispatch(handleError(err.message))
    }

  }
}

export const initializeSearchResults = (type:string, searchTerm: string) => {
  return async (dispatch: (arg0: { type: string; data: movieTitles[] | showTitles[] | string | undefined }) => void) => {

    try {
      const searchResults = await getSearchedTitle(type, searchTerm)
      dispatch({
        type: "INITIALIZE_SEARCH_RESULTS",
        data: searchResults
      })
    }// eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      dispatch(handleError(err.message))
    }

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

export const setSearchTerm = (searchTerm: string) => {
  return async (dispatch: (arg0: { type: string; data: string }) => void) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      data: searchTerm
    })
  }
}

export const dispatchError = (errorMessage: string) => {
  return async (dispatch: (arg0: { type: string; data: string }) => void) => {
    dispatch(handleError(errorMessage))
  }
}

export default reducer