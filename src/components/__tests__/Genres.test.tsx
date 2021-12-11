import React from "react"
import { render } from "@testing-library/react"
import { prettyDOM } from '@testing-library/dom'
import Genres from "../Genres"

test("renders gender name", () => {
    const titleGenres = [ 0, 3 ]
    const genres = [ { id: 0, name: "TEST" } ]
    const component = render(<Genres titleGenres={ titleGenres } genres={genres} />)

    console.log("PRETTY DOM", prettyDOM())
    expect(component.container).toHaveTextContent("TEST")

})