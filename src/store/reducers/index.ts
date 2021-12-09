import { getTopRated, getGenres } from "../../services/moviedb"

const reducer = ( state = {}  , action:any) => {
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
  return async (dispatch:any) => {
    const topRated = await getTopRated()
    dispatch({
      type: "INITIALIZE_TOP_RATED",
      data: topRated
    })
  }
}

export const initializeGenres = () => {
  return async (dispatch:any) => {
    const genres = await getGenres()
    dispatch({
      type: "INITIALIZE_GENRES",
      data: genres
    })
  }
}

export default reducer