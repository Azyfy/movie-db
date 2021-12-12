import React from "react"
import "./App.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializeTopRated, initializeGenres } from "./store/reducers"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Loader from "./components/Loader"
import Titles from "./components/Titles"
import NoMatch from "./components/NoMatch"
import Header from "./components/Header"
import NavMenu from "./components/NavMenu"
import SingleTitle from "./components/SingleTitle"
import Footer from "./components/Footer"
import Error from "./components/Error"

import { state } from "./types"


function App() {
  const topRated = useSelector( (state:state) => state.topRated)
  const genres = useSelector( (state:state) => state.genres)
  const currentSearchResults: any = useSelector( (state:state) => state.searchResults)
  const errorMessage = useSelector( (state:state) => state.errorMessage)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(initializeTopRated())
    dispatch(initializeGenres())
  }, [dispatch])

  if(errorMessage) {
    return (
      <Error message={errorMessage} />
    )
  }

  if(!topRated || !genres) {
    return (
      <Loader />
    )
  }

  return (
    <div className="App">

      <Header />
      <main>
        <Router>

          <NavMenu />

          <Routes>
            <Route  path="/" element={ <Navigate to="/top-shows" /> } />
            <Route  path="/top-shows" element={ <Titles titles={(currentSearchResults)? currentSearchResults : topRated.topShows } genres={genres.movieGenres} heading="TV Shows" currentPath="/top-shows" /> } />
            <Route  path="/top-movies" element={ <Titles titles={(currentSearchResults)? currentSearchResults : topRated.topMovies} genres={genres.showGenres} heading="Movies" currentPath="/top-movies" /> } />
            <Route  path="/top-shows/:id" element={ <SingleTitle  type={"tv"} /> } />
            <Route  path="/top-movies/:id" element={ <SingleTitle type={"movie"} /> } />

            <Route path="*" element={ <NoMatch /> } />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
