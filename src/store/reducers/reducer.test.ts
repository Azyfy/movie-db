import reducer from "./index"
import deepFreeze from "deep-freeze"

import { state } from "../../types"

describe("reducer", () => {
  const initialState = {
    searchTerm: ""
  }

  test("returns new state with action INITIALIZE_TOP_RATED", () => {
    const state: state = initialState

    const topMovies = [{
      "backdrop_path": "/5hNcsnMkwU2LknLoru73c76el3z.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 23.459,
      "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      "release_date": "1995-10-20",
      "title": "Dilwale Dulhania Le Jayenge",
      "vote_average": 8.7,
      "vote_count": 3268
    }]

    const topShows = [{
      "backdrop_path": "/7q448EVOnuE3gVAx24krzO7SNXM.jpg",
      "first_air_date": "2021-09-03",
      "genre_ids": [
        10764
      ],
      "id": 130392,
      "name": "The D'Amelio Show",
      "overview": "From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.",
      "popularity": 21.168,
      "poster_path": "/z0iCS5Znx7TeRwlYSd4c01Z0lFx.jpg",
      "vote_average": 9.4,
      "vote_count": 2570
    }]

    const action = {
      type: "INITIALIZE_TOP_RATED",
      data: {
        topMovies,
        topShows
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState.topRated.topMovies).toHaveLength(1)
    expect(newState).toEqual({ topRated: action.data, ...initialState })
  })

  test("returns new state with action INITIALIZE_GENRES", () => {
    const state: state = initialState

    const movieGenres = [{ id: 13, name: "test" }, { id:17, name: "test2" }]
    const showGenres = [{ id: 5, name: "test3" }]

    const action = {
      type: "INITIALIZE_GENRES",
      data: {
        movieGenres,
        showGenres
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState.genres.movieGenres).toHaveLength(2)
    expect(newState.genres.showGenres).toHaveLength(1)
    expect(newState).toEqual({ genres: action.data, ...initialState })
  })

  test("returns new state with action INITIALIZE_SEARCH_RESULTS", () => {
    const state: state = initialState

    const search = {
      name: "name",
      title: "test"
    }

    const action = {
      type: "INITIALIZE_SEARCH_RESULTS",
      data: {
        search
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toEqual({ searchResults: action.data, ...initialState })
  })

  test("returns new state with action CLEAR_SEARCH_RESULTS", () => {
    const state: state = initialState

    const action = {
      type: "CLEAR_SEARCH_RESULTS",
      data: null
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toEqual({ searchResults: null, ...initialState })
  })

  test("returns new state with action SET_SEARCH_TERM", () => {
    const state: state = initialState

    const action = {
      type: "SET_SEARCH_TERM",
      data: "Test"
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toEqual({ searchTerm: "Test" })
  })

  test("returns new state with action ERROR", () => {
    const state: state = {
      searchTerm: "test"
    }

    const action = {
      type: "ERROR",
      data: "Test Error Message"
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toEqual({ searchTerm: "test", errorMessage: "Test Error Message" })
  })

  test("returns same state with invalid action, default block", () => {
    const state: state = {
      ...initialState,
      errorMessage: "test"
    }

    const action = {
      type: "THIS_WILL_CAUSE_DEFAULT",
      data: "Test Error Message"
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toEqual({ errorMessage: "test", ...initialState })
  })

})
