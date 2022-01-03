# Movies DB

A responsive movie DB app, bootstrapped with Create React App, displaying the top 10 rated TV shows and the top 10 movies, a search function for both, and a detailed view for individual items; using the [TheMovieDB API](https://developers.themoviedb.org/3).

## Table of contents

- [Overview](#overview)
    - [Links](#links)
    - [Features](#features)
    - [Tools](#tools)
    - [Screenshot(s)](#screenshot)
- [Local use](#local-use)
    - [Instructions](#instructions)
        - [Available Scripts](#available-scripts)
        - [gh-pages Deploy Instructions](#gh-pages-deploy-instructions)

## Overview

### Links
- [Live](https://azzryel.github.io/movie-db)

### Features
- When app loads, the TV SHOWS tab is selected.
- Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.
-The search field reacts to any change in the input field and fires a request on the search endpoint only when there are 3 or more characters in the search bar and is triggered one second after the user has stopped typing.
When there are less than 3 characters in the search bar, the content reverts back to the top 10 MOVIES/TV SHOWS.
- Search Results appear under the search box and
switching between tabs while searching triggers the search again with the same search term for the selected tab and updates the results.
-When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.
- The detailed View of the Movie/TV Show shows the cover image on top and in the case of Movies/TV Shows which have a trailer shows the trailer video instead.
- Below the image/trailer some basic information regarding the selected Movie/TV Show are shown.
- The Back Button returns the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show.

### Tools
- React
- Redux
- TypeScript
- ESlint
- Jest
- Cypress

### Screenshot

## Local use

### Instructions
The usual; clone the repo and install the dependencies (`npm install`)

**Note:** the application requires env variable for the API key; create the `.env` file in you root and add the variable `REACT_APP_API_KEY=<YOUR_KEY_HERE>`

**Note2:** the env variable needs to be set *before* running the application

**Note 3:** for the e2e tests the app needs to be running (`npm start`)

#### Available Scripts
-  `npm start` runs the app at [http://localhost:3000](http://localhost:3000) in the development mode
- `npm run lint` linting
- `npm run test` runs the tests in the interactive watch mode
- `npm run eject` dont touch this
- `npm run cypress:open` opens the fancy cypress test runner
- `npm run test:e2e` runs the cypress tests in the terminal
- `npm run build` builds the app for production
- `npm run deploy` deploys the build to gh-pages via gh-pages package [see deploy instruction](#gh-pages-deploy-instructions)
    - `predeploy` just run deploy script and it will run build before deploying

#### gh-pages deploy instructions
The deploy script is set for deploying to gh-pages using the gh-pages dev dep. If you want to deploy the app to gh-pages add
`"https://<your_github_username>.github.io/<repo_name>"` as `"homepage"` in your `package.json` and in `App.tsx` file, in `<Router />` add `basename="<repo_name>"` (ex. `<Router basename="<repo_name>" />"`)