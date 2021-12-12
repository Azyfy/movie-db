import React from "react"
import { render } from "@testing-library/react"
import Title from "../Title"

describe("Title component", () => {

    test("Title component renders data of movie object", () => {

        const title: any = {
            "backdrop_path": "/5hNcsnMkwU2LknLoru73c76el3z.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "videos": {
                "results": []
            },
            "id": 33,
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 23.459,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "release_date": "1995-10-20",
            "title": "Dilwale Dulhania Le Jayenge",
            "vote_average": 8.7,
            "vote_count": 3268
            }

        const component = render(<Title title={ title }  />)

        expect(component.container).toHaveTextContent("Dilwale Dulhania Le Jayenge")
        expect(component.container).toHaveTextContent("1995-10-20")
    })

    test("Title component renders data of show object", () => {
    
        const title: any = {
            "backdrop_path": "/7q448EVOnuE3gVAx24krzO7SNXM.jpg",
            "first_air_date": "2021-09-03",
            "genre_ids": [
                10764
            ],
            "videos": {
                "results": []
            },
            "id": 130392,
            "name": "The D'Amelio Show",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The D'Amelio Show",
            "overview": "From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.",
            "popularity": 21.168,
            "poster_path": "/z0iCS5Znx7TeRwlYSd4c01Z0lFx.jpg",
            "vote_average": 9.4,
            "vote_count": 2570
            }
    
        const component = render(<Title title={ title }  />)

        expect(component.container).toHaveTextContent("he D'Amelio Show")
        expect(component.container).toHaveTextContent("2021-09-03")
    })

})