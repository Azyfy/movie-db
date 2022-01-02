import React from "react"
import { render } from "@testing-library/react"
import Titles from "../Titles"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom"

import { genre } from "../../types"

describe("Titles component", () => {
    test("Titles component renders movie or tv show titles", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const titles: any = [
            {
            "backdrop_path": "/5hNcsnMkwU2LknLoru73c76el3z.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 33,
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 23.459,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "release_date": "1995-10-20",
            "title": "Dilwale Dulhania Le Jayenge",
            "vote_average": 8.7,
            "vote_count": 3268
            },
            {
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
                "title": "TESTING",
                "vote_average": 8.7,
                "vote_count": 3268
            }
        ]
        const heading = "Movies Test"
        const currentPath= "/movies"
        const genres: genre[] = [ { id: 0, name: "TEST" } ]
        const component = render(
            <Router>
                <Routes>
                    <Route path="/" element={ <Titles titles={ titles } genres={ genres } heading={ heading } currentPath={ currentPath } /> } />
                </Routes>
            </Router>
        )

        expect(component.container).toHaveTextContent("Dilwale Dulhania Le Jayenge")
        expect(component.container).toHaveTextContent("TESTING")
        expect(component.container).toHaveTextContent("Movies Test")

    })

    test("Titles component renders no results message on empty array", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const titles: any = [ ]
        const heading = "Movies Test"
        const currentPath= "/movies"
        const genres: genre[] = [ { id: 0, name: "TEST" } ]
        const component = render(
            <Router>
                <Routes>
                    <Route path="/" element={ <Titles titles={ titles } genres={ genres } heading={ heading } currentPath={ currentPath } /> } />
                </Routes>
            </Router>
        )

        expect(component.container).toHaveTextContent("No results")
        expect(component.container).not.toHaveTextContent("Movies Test")
    })
})
