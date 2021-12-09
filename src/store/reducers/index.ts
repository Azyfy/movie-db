import { getTopRated, getGenres } from "../../services/moviedb"
import { state, genre, movieTitles, showTitles } from "../../types"

const reducer = ( state: state = {}, action: { type: string; data: any }) => {
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

export default reducer