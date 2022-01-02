interface baseTitles {
    id: number
    genre_ids: number[]
    backdrop_path: string
    poster_path: string
    popularity: number
    overview: string
    vote_average: number
    tagline: string
    status: string
}

export interface movieTitles extends baseTitles {
    title: string
    release_date: string
  }

export interface showTitles extends baseTitles {
    name: string
    first_air_date: string
  }

export interface videos {
    results: video[]
}

interface video {
    id: string
    key: string
    name: string
    site: string
}

export interface singleMovieTitle extends movieTitles  {
    videos: videos
    runtime: number
}

export interface singleShowTitle extends showTitles {
    videos: videos
    number_of_episodes: number
    number_of_seasons: number
}

export interface topRated {
    topMovies: movieTitles[]
    topShows: showTitles[]
}

export interface genre {
    id: number
    name: string
}

export interface genres {
    movieGenres: genre[]
    showGenres: genre[]
}

export interface state {
    topRated?: topRated
    genres?: genres
    searchResults?: movieTitles[] | showTitles[] | null
    errorMessage?: string
    searchTerm: string
}

export interface titlesProps {
    titles: showTitles[] | movieTitles[]
    genres: genre[]
    currentPath: string
    heading: string
}

export type action =
  | {
      type: "INITIALIZE_TOP_RATED"
      data: topRated
    }
  | {
      type: "INITIALIZE_GENRES"
      data: genre[]
    }
  | {
    type: "INITIALIZE_SEARCH_RESULTS"
    data: movieTitles[] | showTitles[]
  }
  | {
    type: "CLEAR_SEARCH_RESULTS"
    data: null
  }
  | {
    type: "SET_SEARCH_TERM"
    data: string
  }
  | {
    type: "ERROR"
    data: string
  }