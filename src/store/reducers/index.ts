import { getTopRated } from "../../services/moviedb"

const reducer = ( state = {}  , action:any) => {
  switch (action.type) {
    case "INITIALIZE_TOP_RATED":
      const topRated = action.data

      return {
        ...state,
        topRated
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

export default reducer