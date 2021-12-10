interface baseTitles {
    id: number
    genre_ids: [number]
    backdrop_path: string
    poster_path: string
    popularity: number
    overview: string
    vote_average: number
}

export interface movieTitles extends baseTitles {
    title: string
    release_date: string
  }

export interface showTitles extends baseTitles {
    name: string
    first_air_date: string
  }

export interface topRated {
    topMovies: [movieTitles]
    topShows: [showTitles]
}

export interface genre {
    id: number
    name: string
}

export interface genres {
    movieGenres: [genre]
    showGenres: [genre]
}

export interface state {
    topRated: topRated
    genres: genres
    searchResults: [movieTitles | showTitles] | null
}

export interface titlesProps {
    titles: [showTitles] | [movieTitles]
    genres: [genre]
    currentPath: string
}